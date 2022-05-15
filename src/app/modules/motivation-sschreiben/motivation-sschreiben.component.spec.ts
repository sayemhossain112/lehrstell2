import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationSschreibenComponent } from './motivation-sschreiben.component';

describe('MotivationSschreibenComponent', () => {
  let component: MotivationSschreibenComponent;
  let fixture: ComponentFixture<MotivationSschreibenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotivationSschreibenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotivationSschreibenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
