import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trail-and-reference',
  templateUrl: './trail-and-reference.component.html',
  styleUrls: ['./trail-and-reference.component.scss']
})
export class TrailAndReferenceComponent implements OnInit {

  date = new Date()
  constructor(public commonService: CommonService, private router: Router,) { }

  ngOnInit(): void {

  }

  onNext() {

    console.log('Page 3 data-->', this.commonService.trailApprentice, this.commonService.references)
    // this.commonService.step = 4
    localStorage.setItem('trailApprentice', JSON.stringify(this.commonService.trailApprentice))
    localStorage.setItem('references', JSON.stringify(this.commonService.references))
    localStorage.setItem('step', JSON.stringify(this.commonService.step))
    this.router.navigateByUrl('/cv-generator/preview')
  }

  onBack() {
    this.commonService.step = 2
    localStorage.setItem('step', JSON.stringify(this.commonService.step))
  }

  addTrail() {
    this.commonService.trailApprentice.push({ von: '', bis: '', beruf: '', firma: '', ort: '' })
  }

  addReferenzen() {
    this.commonService.references.push({ firstName: '', lastName: '', email: '', mobile: '', function: '' })
  }
  numericOnly(event: any): boolean {
    if(event.key === '+'){
      return true;
    }
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  deleteTrailObject(index: any) {
    this.commonService.trailApprentice.splice(index, 1);
    localStorage.setItem('trailApprentice', JSON.stringify(this.commonService.trailApprentice))

  }
  deleteRefObject(index: any) {
    this.commonService.references.splice(index, 1);
    localStorage.setItem('references', JSON.stringify(this.commonService.references))

  }
}
