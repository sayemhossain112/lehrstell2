import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';
import { DomSanitizer } from "@angular/platform-browser";
// declare function myfunction(params1: string, params2: string): any;
// declare function getPDF(): any;
@Component({
    selector: 'app-cv-pdf-preview',
    templateUrl: './cv-pdf-preview.component.html',
    styleUrls: ['./cv-pdf-preview.component.scss']
})
export class CvPdfPreviewComponent implements OnInit {

    constructor(public commonService: CommonService, private router: Router, public sanitizer: DomSanitizer) { }

    siblingsNamesString = ''
    ngOnInit(): void {
        // console.log("siblingsNamesString-->", this.commonService.siblings)
        let data = this.commonService.siblings.map((result: any) => {
            return result['firstname'] + ' (' + result['job'] + ')'
        })
        this.siblingsNamesString = data.join(', ')
        this.siblingsNamesString = this.siblingsNamesString.replace('()', ' ')
        // console.log("siblingsNamesString-->", this.siblingsNamesString)
        this.checkingArrayOfObjectEmpty()
    }
    @ViewChild('content') content!: ElementRef;

    loader = false
    convertToPDF() {
        this.loader = true
        let that = this
        html2canvas(document.getElementById('pdf-page')!, {
            allowTaint: true,
            scale: 4,
            width: this.content.nativeElement.offsetWidth,
            height: this.content.nativeElement.offsetHeight
        }).then(function (canvas) {
            const contentDataURL = canvas.toDataURL('image/jpeg')
            let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var width = pdf.internal.pageSize.getWidth();
            var height = canvas.height * width / canvas.width;
            pdf.addImage(contentDataURL, 'JPEG', 0, 0, width, height)
            let name = 'lehrstell-' + new Date().toUTCString() + '.pdf'
            pdf.save(name); // Generated PDF
            that.loader = false
        });
    }

    schooling = false
    siblings = false
    languages = false
    hobbys = false
    trailApprentice = false
    references = false
    checkingArrayOfObjectEmpty() {
        this.commonService.schooling.map((data: any) => {
            if (data['von'] != "") {
                this.schooling = true
            }
        })
        this.commonService.languages.map((data: any) => {
            if (data['language'] != "") {
                this.languages = true
            }
        })
        this.commonService.hobbys.map((data: any) => {
            if (data['name'] != "") {
                this.hobbys = true
            }
        })
        this.commonService.trailApprentice.map((data: any) => {
            if (data['bis'] != "") {
                this.trailApprentice = true
            }
        })
        this.commonService.references.map((data: any) => {
            if (data['firstName'] != "") {
                this.references = true
            }
        })

        this.commonService.siblings.map((data: any) => {
            if (data['firstname'] != "") {
                this.siblings = true
            }
        })
    }


    onBack() {
        this.router.navigateByUrl('/cv-generator')
    }

    isObjectEmpty(Obj: any) {
        for (var key in Obj) {
            if (Obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

}
