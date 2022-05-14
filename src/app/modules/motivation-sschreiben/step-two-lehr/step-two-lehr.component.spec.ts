import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepTwoLehrComponent } from './step-two-lehr.component';

describe('StepTwoLehrComponent', () => {
  let component: StepTwoLehrComponent;
  let fixture: ComponentFixture<StepTwoLehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepTwoLehrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepTwoLehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
