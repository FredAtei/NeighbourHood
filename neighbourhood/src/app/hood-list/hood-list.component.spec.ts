import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoodListComponent } from './hood-list.component';

describe('HoodListComponent', () => {
  let component: HoodListComponent;
  let fixture: ComponentFixture<HoodListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoodListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HoodListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
