import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolAndHobbysComponent } from './school-and-hobbys.component';

describe('SchoolAndHobbysComponent', () => {
  let component: SchoolAndHobbysComponent;
  let fixture: ComponentFixture<SchoolAndHobbysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolAndHobbysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolAndHobbysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
