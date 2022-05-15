import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent implements OnInit {

  msPersonalForm!: FormGroup;
  date = new Date()
  cropDone = false
  showDoneBtn = false
  constructor(public commonService: CommonService, private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    let msPersonalForm = this.commonService.msPersonalForm
    if (msPersonalForm) {
      this.initmsPersonalForm(msPersonalForm)
    } else {
      this.initmsPersonalForm()
    }
    let msPersonalFormLocalSorage = localStorage.getItem('msPersonalForm')
    if (msPersonalFormLocalSorage) {
      this.initmsPersonalForm(JSON.parse(msPersonalFormLocalSorage))
    }
  }


  get f() {
    return this.msPersonalForm.controls;
  }

  addSibling() {
    this.commonService.siblings.push({ firstname: '', job: '' })
  }

  submitted = false
  initmsPersonalForm(data?: any) {
    if (data) {
      this.msPersonalForm = this._formBuilder.group({
        firstName: [data.firstName, [Validators.required]],
        lastName: [data.lastName, [Validators.required]],
        street: [data.street, [Validators.required]],
        number: [data.number],
        zip: [data.zip],
        place: [data.place],
        mobile: [data.mobile],
        email: [data.email],
        dob: [data.dob, [Validators.required]],
        derFirma: [data.derFirma],
        dfStreet: [data.dfStreet],
        dfZip: [data.dfZip],
        dfPlace: [data.dfPlace],
        dfBeruf: [data.dfBeruf],
        ebaOrEfz: [data.ebaOrEfz],
        schreibst: [data.schreibst],
        schreibstName: [data.schreibstName],
        schreibst1Name: [data.schreibst1Name],
        schreibst2Name: [data.schreibst2Name]
      });
    } else {
      this.msPersonalForm = this._formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: [''],
        zip: [''],
        place: [''],
        mobile: [''],
        email: [''],
        dob: ['', [Validators.required]],
        derFirma: [''],
        dfStreet: [''],
        dfZip: [''],
        dfPlace: [''],
        dfBeruf: [''],
        ebaOrEfz: ['EBA'],
        schreibst: ['Frau:'],
        schreibstName: [''],
        schreibst1Name: [''],
        schreibst2Name: ['']
      });
    }
  }


  isObjectEmpty(Obj: any) {
    for (var key in Obj) {
      if (Obj.hasOwnProperty(key))
        return false;
    }
    return true;
  }

  onNext() {
    this.commonService.msStep = 2
    this.commonService.msPersonalForm = JSON.parse(JSON.stringify(this.msPersonalForm.value))
    localStorage.setItem('msPersonalForm', JSON.stringify(this.commonService.msPersonalForm))
    localStorage.setItem('msType', JSON.stringify(this.commonService.msType))
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

    console.log('msPersonalForm--->', this.msPersonalForm.value)
  }

  numericOnly(event: any): boolean {
    if(event.key === '+'){
      return true;
    }
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }


}
