import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepThreeSchnComponent } from './step-three-schn.component';

describe('StepThreeSchnComponent', () => {
  let component: StepThreeSchnComponent;
  let fixture: ComponentFixture<StepThreeSchnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepThreeSchnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepThreeSchnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
