import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FjcintranetComponent } from './fjcintranet.component';

describe('FjcintranetComponent', () => {
  let component: FjcintranetComponent;
  let fixture: ComponentFixture<FjcintranetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FjcintranetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FjcintranetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
