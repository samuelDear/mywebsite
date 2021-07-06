import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfxtradeComponent } from './afxtrade.component';

describe('AfxtradeComponent', () => {
  let component: AfxtradeComponent;
  let fixture: ComponentFixture<AfxtradeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfxtradeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfxtradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
