import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isShowCookiesContainer: boolean = true;
  constructor(private router: Router, public commonService: CommonService
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("cokkiesAgreed") == 'true') {
      this.isShowCookiesContainer = true;
    } else if (localStorage.getItem("cokkiesAgreed") == 'false') {
      this.isShowCookiesContainer = false;
    }
  }

  navigateTo(path: string) {
    this.commonService.step = 1
    localStorage.setItem('step', JSON.stringify(this.commonService.step))
    this.router.navigateByUrl(path)
  }

  crossClick(){
    localStorage.setItem('cokkiesAgreed', 'false');
    this.isShowCookiesContainer = false;
  }

}
