import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoivComponent } from './soiv.component';

describe('SoivComponent', () => {
  let component: SoivComponent;
  let fixture: ComponentFixture<SoivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
