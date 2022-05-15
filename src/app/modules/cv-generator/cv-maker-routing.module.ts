import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvGeneratorComponent } from './cv-generator/cv-generator.component';
import { CvPdfPreviewComponent } from './cv-generator/cv-pdf-preview/cv-pdf-preview.component';

const routes: Routes = [
  { path: '', component: CvGeneratorComponent },
  { path: 'preview', component: CvPdfPreviewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CvMakerRoutingModule { }
