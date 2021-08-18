import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesBoxComponent } from './features-box.component';

describe('FeaturesBoxComponent', () => {
  let component: FeaturesBoxComponent;
  let fixture: ComponentFixture<FeaturesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesBoxComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
