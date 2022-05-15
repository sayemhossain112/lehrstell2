import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsSchnPreviewComponent } from './ms-schn-preview.component';

describe('MsSchnPreviewComponent', () => {
  let component: MsSchnPreviewComponent;
  let fixture: ComponentFixture<MsSchnPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsSchnPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsSchnPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
