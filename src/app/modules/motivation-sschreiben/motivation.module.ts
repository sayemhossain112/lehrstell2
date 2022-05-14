import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MotivationRoutingModule } from './motivation-routing.module';
import { StepOneComponent } from './step-one/step-one.component';
import { StepTwoLehrComponent } from './step-two-lehr/step-two-lehr.component';
import { StepThreeLehrComponent } from './step-three-lehr/step-three-lehr.component';
import { StepTwoSchnComponent } from './step-two-schn/step-two-schn.component';
import { StepThreeSchnComponent } from './step-three-schn/step-three-schn.component';
import { MotivationSschreibenComponent } from './motivation-sschreiben.component';
import { MsLehrPreviewComponent } from './ms-lehr-preview/ms-lehr-preview.component';
import { MsSchnPreviewComponent } from './ms-schn-preview/ms-schn-preview.component';


@NgModule({
  declarations: [
    MotivationSschreibenComponent,
    StepOneComponent,
    StepTwoLehrComponent,
    StepThreeLehrComponent,
    StepTwoSchnComponent,
    StepThreeSchnComponent,
    MsLehrPreviewComponent,
    MsSchnPreviewComponent
  ],
  imports: [
    CommonModule,
    MotivationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MotivationModule { }
