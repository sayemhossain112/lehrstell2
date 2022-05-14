import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PErsonalComponent } from './personal.component';

describe('PErsonalComponent', () => {
  let component: PErsonalComponent;
  let fixture: ComponentFixture<PErsonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PErsonalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PErsonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
