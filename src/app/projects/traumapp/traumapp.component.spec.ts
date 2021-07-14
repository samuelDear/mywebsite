import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumappComponent } from './traumapp.component';

describe('TraumappComponent', () => {
  let component: TraumappComponent;
  let fixture: ComponentFixture<TraumappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TraumappComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraumappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
