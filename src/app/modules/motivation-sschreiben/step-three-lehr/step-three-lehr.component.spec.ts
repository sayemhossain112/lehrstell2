import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeLehrComponent } from './step-three-lehr.component';

describe('StepThreeLehrComponent', () => {
  let component: StepThreeLehrComponent;
  let fixture: ComponentFixture<StepThreeLehrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreeLehrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeLehrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
