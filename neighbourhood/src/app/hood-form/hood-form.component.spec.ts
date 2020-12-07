import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodFormComponent } from './hood-form.component';

describe('HoodFormComponent', () => {
  let component: HoodFormComponent;
  let fixture: ComponentFixture<HoodFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
