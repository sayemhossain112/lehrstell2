import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsLehrPreviewComponent } from './ms-lehr-preview.component';

describe('MsLehrPreviewComponent', () => {
  let component: MsLehrPreviewComponent;
  let fixture: ComponentFixture<MsLehrPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsLehrPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsLehrPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
