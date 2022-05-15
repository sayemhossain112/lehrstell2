import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/core/services/common.service';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PErsonalComponent implements OnInit {

  personalForm!: FormGroup;
  date = new Date()
  cropDone = false
  showDoneBtn = false
  constructor(public commonService: CommonService, private _formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    let personalData = this.commonService.personalData
    if (personalData) {
      this.initPersonalForm(personalData)
    } else {
      this.initPersonalForm()
    }
    let personalDataLocalSorage = localStorage.getItem('personalData')
    if (personalDataLocalSorage) {
      // this.personalData = JSON.parse(personalDataLocalSorage)
      this.initPersonalForm(JSON.parse(personalDataLocalSorage))
    }
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    console.log('This is fileChangeEvent-->', event)
    this.cropDone = false
    this.showDoneBtn = true
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    console.log('This is imageCropped-->', event)
    this.croppedImage = event.base64;
  }

  imageLoaded(image: LoadedImage) {
    console.log('This is imageLoaded-->', event)
    // show cropper
  }

  cropperReady() {
    console.log('This is cropperReady-->', event)
  }

  loadImageFailed() {
    console.log('This is loadImageFailed-->', event)
    // show message
  }

  imageCropedDone() {
    this.cropDone = true
    this.showDoneBtn = false
    this.personalForm.controls['image'].setValue(this.croppedImage)
  }

  get f() {
    return this.personalForm.controls;
  }

  addSibling() {
    this.commonService.siblings.push({ firstname: '', job: '' })
  }

  submitted = false
  initPersonalForm(data?: any) {
    if (data) {
      this.croppedImage = data.image
      this.personalForm = this._formBuilder.group({
        firstName: [data.firstName, [Validators.required]],
        lastName: [data.lastName, [Validators.required]],
        street: [data.street, [Validators.required]],
        number: [data.number],
        zip: [data.zip],
        place: [data.place],
        mobile: [data.mobile],
        email: [data.email],
        dob: [data.dob, [Validators.required]],
        fFirstName: [data.fFirstName],
        fLastName: [data.fLastName],
        fJob: [data.fJob],
        mFirstName: [data.mFirstName],
        mLastName: [data.mLastName],
        mJob: [data.mJob],
        image: [data.image],
      });
    } else {
      this.personalForm = this._formBuilder.group({
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        street: ['', [Validators.required]],
        number: [''],
        zip: [''],
        place: [''],
        mobile: [''],
        email: [''],
        dob: ['', [Validators.required]],
        fFirstName: [''],
        fLastName: [''],
        fJob: [''],
        mFirstName: [''],
        mLastName: [''],
        mJob: [''],
        image: [''],
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
    this.commonService.step = 2
    this.commonService.personalData = JSON.parse(JSON.stringify(this.personalForm.value))
    localStorage.setItem('personalData', JSON.stringify(this.commonService.personalData))
    localStorage.setItem('siblings', JSON.stringify(this.commonService.siblings))
    localStorage.setItem('step', JSON.stringify(this.commonService.step))

    // console.log('personalForm--->', this.personalForm.value, this.siblings)
  }

  numericOnly(event: any): boolean {
    if(event.key === '+'){
      return true;
    }
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }
  deleteSiblingObj(index: any) {
    this.commonService.siblings.splice(index, 1);
    localStorage.setItem('siblings', JSON.stringify(this.commonService.siblings))

  }
}
