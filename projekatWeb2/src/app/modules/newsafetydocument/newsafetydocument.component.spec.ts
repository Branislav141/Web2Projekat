import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsafetydocumentComponent } from './newsafetydocument.component';

describe('NewsafetydocumentComponent', () => {
  let component: NewsafetydocumentComponent;
  let fixture: ComponentFixture<NewsafetydocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsafetydocumentComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsafetydocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
