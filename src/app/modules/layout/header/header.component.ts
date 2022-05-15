import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
 
  constructor(
    private router: Router,
    public commonService: CommonService,
  ) { }

  

  ngOnInit(): void {
  }  
  navOpen = false;

  NavBarOpen(){
    this.navOpen = !this.navOpen;
  }
  navigateTo(path: string) {
    this.router.navigateByUrl(path)
  }

}












