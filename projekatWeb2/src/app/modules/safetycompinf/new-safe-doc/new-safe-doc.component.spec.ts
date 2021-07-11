import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSafeDocComponent } from './new-safe-doc.component';

describe('NewSafeDocComponent', () => {
  let component: NewSafeDocComponent;
  let fixture: ComponentFixture<NewSafeDocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewSafeDocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSafeDocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
