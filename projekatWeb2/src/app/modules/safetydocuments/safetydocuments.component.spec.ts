import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SafetydocumentsComponent } from './safetydocuments.component';

describe('SafetydocumentsComponent', () => {
  let component: SafetydocumentsComponent;
  let fixture: ComponentFixture<SafetydocumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SafetydocumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SafetydocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
