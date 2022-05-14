import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-three-lehr',
  templateUrl: './step-three-lehr.component.html',
  styleUrls: ['./step-three-lehr.component.scss']
})
export class StepThreeLehrComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }

  ngOnInit(): void {
  }

  onNext() {
    // localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))
    localStorage.setItem('lehrStepThreeData', JSON.stringify(this.commonService.lehrStepThreeData))
    console.log("lehrStepThreeData", this.commonService.lehrStepThreeData)
    this.router.navigateByUrl('/motivation-sschreiben/lehr-preview')
  }

  onBack() {
    this.commonService.msStep = 2
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }

}