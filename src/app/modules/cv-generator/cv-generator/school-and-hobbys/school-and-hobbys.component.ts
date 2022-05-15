import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';
@Component({
  selector: 'app-school-and-hobbys',
  templateUrl: './school-and-hobbys.component.html',
  styleUrls: ['./school-and-hobbys.component.scss']
})
export class SchoolAndHobbysComponent implements OnInit {

  constructor(public commonService: CommonService, private _formBuilder: FormBuilder,) { }
  date = new Date()
  years: any[] = []
  ngOnInit(): void {
    let thisYear = (new Date()).getFullYear();
    this.years.push(thisYear + 1);
    for (var i = 0; i < 11; i++) {
      this.years.push(thisYear)
      thisYear = thisYear - 1;
    }

    // console.log("Year list-->", this.years)
  }

  onNext() {

    console.log('Page 2 data-->', this.commonService.schooling, this.commonService.languages, this.commonService.hobbys)
    this.commonService.step = 3
    localStorage.setItem('schooling', JSON.stringify(this.commonService.schooling))
    localStorage.setItem('languages', JSON.stringify(this.commonService.languages))
    localStorage.setItem('hobbys', JSON.stringify(this.commonService.hobbys))
    localStorage.setItem('step', JSON.stringify(this.commonService.step))

  }

  onBack() {
    this.commonService.step = 1
    localStorage.setItem('step', JSON.stringify(this.commonService.step))
  }

  addSchooling() {
    this.commonService.schooling.push({ von: '', bis: '', schule: '', ort: '' })
  }

  addlanguage() {
    this.commonService.languages.push({ language: '', type: '' })
  }
  addCustomeLanguage() {
    this.commonService.custLanguages.push({ language: '', type: '' })
  }
  addHobby() {
    this.commonService.hobbys.push({ name: '', description: '', leftBoxPlaceHolder: 'Hobbys', rightBoxPlaceHolder: 'Beschreibung deines Hobbys' })
  }

  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  deleteSchulbildungObj(index: any) {
    this.commonService.schooling.splice(index, 1);
    localStorage.setItem('schooling', JSON.stringify(this.commonService.schooling))

  }
  deleteLanguageObj(index: any) {
    this.commonService.languages.splice(index, 1);
    localStorage.setItem('languages', JSON.stringify(this.commonService.languages))
  }

  deleteCutomeLanguageObj(index: any) {
    this.commonService.custLanguages.splice(index, 1);
    localStorage.setItem('custLanguages', JSON.stringify(this.commonService.custLanguages))

  }

  deleteHobbyObj(index: any) {
    this.commonService.hobbys.splice(index, 1);
    localStorage.setItem('hobbys', JSON.stringify(this.commonService.hobbys))

  }
}
