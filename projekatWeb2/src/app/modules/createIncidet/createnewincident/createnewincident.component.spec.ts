import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewincidentComponent } from './createnewincident.component';

describe('CreatenewincidentComponent', () => {
  let component: CreatenewincidentComponent;
  let fixture: ComponentFixture<CreatenewincidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatenewincidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatenewincidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
