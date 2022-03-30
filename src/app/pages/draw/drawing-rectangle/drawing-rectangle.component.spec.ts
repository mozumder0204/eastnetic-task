import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingRectangleComponent } from './drawing-rectangle.component';

describe('DrawingRectangleComponent', () => {
  let component: DrawingRectangleComponent;
  let fixture: ComponentFixture<DrawingRectangleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrawingRectangleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingRectangleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
