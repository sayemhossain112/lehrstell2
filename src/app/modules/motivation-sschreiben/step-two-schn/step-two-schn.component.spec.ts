import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoSchnComponent } from './step-two-schn.component';

describe('StepTwoSchnComponent', () => {
  let component: StepTwoSchnComponent;
  let fixture: ComponentFixture<StepTwoSchnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoSchnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoSchnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
