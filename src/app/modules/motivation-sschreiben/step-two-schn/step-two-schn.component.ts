import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-two-schn',
  templateUrl: './step-two-schn.component.html',
  styleUrls: ['./step-two-schn.component.scss']
})
export class StepTwoSchnComponent implements OnInit {

  constructor(public commonService: CommonService,) { }

  ngOnInit(): void {
  }

  onNext() {

    this.commonService.msStep = 3
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    localStorage.setItem('schnStepTwoData', JSON.stringify(this.commonService.schnStepTwoData))
    console.log("schnStepTwoData", this.commonService.schnStepTwoData)

  }

  onBack() {
    this.commonService.msStep = 1
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}
