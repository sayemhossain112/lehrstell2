import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-motivation-sschreiben',
  templateUrl: './motivation-sschreiben.component.html',
  styleUrls: ['./motivation-sschreiben.component.scss']
})
export class MotivationSschreibenComponent implements OnInit {
  step: Number = 1
  constructor(public commonService: CommonService) { }

  ngOnInit(): void {
  }

  nextStep(step: Number) {
    this.step = step
  }
}