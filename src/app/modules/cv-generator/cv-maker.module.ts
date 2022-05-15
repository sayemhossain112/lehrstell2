import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvGeneratorComponent } from './cv-generator/cv-generator.component';
import { HomeComponent } from './home/home.component';
import { CvMakerRoutingModule } from './cv-maker-routing.module';
import { PErsonalComponent } from './cv-generator/personal/personal.component';
import { SchoolAndHobbysComponent } from './cv-generator/school-and-hobbys/school-and-hobbys.component';
import { TrailAndReferenceComponent } from './cv-generator/trail-and-reference/trail-and-reference.component';
import { CvPdfPreviewComponent } from './cv-generator/cv-pdf-preview/cv-pdf-preview.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
@NgModule({
  declarations: [
    CvGeneratorComponent,
    HomeComponent,
    PErsonalComponent,
    SchoolAndHobbysComponent,
    TrailAndReferenceComponent,
    CvPdfPreviewComponent
  ],
  imports: [
    CommonModule,
    CvMakerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ImageCropperModule
  ]
})
export class CvMakerModule { }
