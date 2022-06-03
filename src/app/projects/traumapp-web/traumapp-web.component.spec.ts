import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraumappWebComponent } from './traumapp-web.component';

describe('TraumappWebComponent', () => {
  let component: TraumappWebComponent;
  let fixture: ComponentFixture<TraumappWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TraumappWebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TraumappWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
