import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BscinformationComponent } from './bscinformation.component';

describe('BscinformationComponent', () => {
  let component: BscinformationComponent;
  let fixture: ComponentFixture<BscinformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BscinformationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BscinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
