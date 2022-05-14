import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/core/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: number = new Date().getFullYear();

  constructor(
    private router: Router,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }
  navigateTo(path: string) {
    this.router.navigateByUrl(path)
  }

  clearCacheData() {
    const cokkiesAgreed = localStorage.getItem("cokkiesAgreed");
    if (confirm("Sind Sie sicher, alle Formulardaten zu löschen?")) {
      this.commonService.initAllData()
      localStorage.clear()
      localStorage.setItem('cokkiesAgreed', cokkiesAgreed??'false');
    }
  }

}
