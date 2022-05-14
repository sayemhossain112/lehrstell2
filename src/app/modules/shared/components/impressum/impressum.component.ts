import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  ngOnInit(): void {
  }

  saveContentInLocalStore(event: any) {
    localStorage.setItem('impressumContent', JSON.stringify(this.commonService.impressumContent))
  }
}
