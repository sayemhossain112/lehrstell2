import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/shared/components/about/about.component';
import { HomeComponent } from './modules/cv-generator/home/home.component';
import { ImpressumComponent } from './modules/shared/components/impressum/impressum.component';
import { AgbComponent } from './modules/shared/components/agb/agb.component';
import { DatenschutzerklärungComponent } from './modules/shared/components/datenschutzerklärung/datenschutzerklärung.component';
import { ErrorComponent } from './modules/shared/components/error/error.component';

const routes: Routes = [

  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  { path: 'agb', component: AgbComponent, pathMatch: 'full' },
  { path: 'impressum', component: ImpressumComponent, pathMatch: 'full' },
  { path: 'über-uns', component: AboutComponent, pathMatch: 'full' },
  { path: 'datenschutzerklärung', component: DatenschutzerklärungComponent, pathMatch: 'full' },
  { path: 'error', component: ErrorComponent, pathMatch: 'full' },

  {
    path: 'cv-generator',
    loadChildren: () => import('./modules/cv-generator/cv-maker.module')
      .then(m => m.CvMakerModule),
  },

  {
    path: 'motivation-sschreiben',
    loadChildren: () => import('./modules/motivation-sschreiben/motivation.module')
      .then(m => m.MotivationModule),
  },

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: '**',
    redirectTo: '/home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
