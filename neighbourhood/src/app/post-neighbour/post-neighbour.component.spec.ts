import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostNeighbourComponent } from './post-neighbour.component';

describe('PostNeighbourComponent', () => {
  let component: PostNeighbourComponent;
  let fixture: ComponentFixture<PostNeighbourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostNeighbourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostNeighbourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
