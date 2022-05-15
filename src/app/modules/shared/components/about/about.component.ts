import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public commonService: CommonService) { }
  ngOnInit(): void {
  }

  saveContentInLocalStore(event: any) {
    localStorage.setItem('impressumContent', JSON.stringify(this.commonService.impressumContent))
  }
}
