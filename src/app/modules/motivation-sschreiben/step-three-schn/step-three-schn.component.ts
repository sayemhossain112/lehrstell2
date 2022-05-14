import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-step-three-schn',
  templateUrl: './step-three-schn.component.html',
  styleUrls: ['./step-three-schn.component.scss']
})
export class StepThreeSchnComponent implements OnInit {

  constructor(public commonService: CommonService, private router: Router,) { }
  date = new Date()

  ngOnInit(): void {
  }

  onNext() {

    // this.commonService.msStep = 4
    localStorage.setItem('schnStepThreeData', JSON.stringify(this.commonService.schnStepThreeData))
    console.log("schnStepThreeData", this.commonService.schnStepThreeData)

    this.router.navigateByUrl('/motivation-sschreiben/schn-preview')
  }

  onBack() {
    this.commonService.msStep = 2
    localStorage.setItem('msStep', JSON.stringify(this.commonService.msStep))

  }
}
