import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonService } from './core/services/common.service';
import { FooterComponent } from './modules/layout/footer/footer.component';
import { HeaderComponent } from './modules/layout/header/header.component';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de-CH';

registerLocaleData(localeDe);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CommonService, { provide: LOCALE_ID, useValue: 'de-ch' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
