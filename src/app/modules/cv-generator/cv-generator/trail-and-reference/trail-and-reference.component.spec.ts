import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrailAndReferenceComponent } from './trail-and-reference.component';

describe('TrailAndReferenceComponent', () => {
  let component: TrailAndReferenceComponent;
  let fixture: ComponentFixture<TrailAndReferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrailAndReferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrailAndReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
