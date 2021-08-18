import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksReadingComponent } from './thanks-reading.component';

describe('ThanksReadingComponent', () => {
  let component: ThanksReadingComponent;
  let fixture: ComponentFixture<ThanksReadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThanksReadingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThanksReadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
