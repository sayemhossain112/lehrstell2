import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-cv-generator',
  templateUrl: './cv-generator.component.html',
  styleUrls: ['./cv-generator.component.scss']
})
export class CvGeneratorComponent implements OnInit {

  step: Number = 1
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  nextStep(step: Number) {
    this.step = step
  }

}
