import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrmComponent } from './orm.component';

describe('OrmComponent', () => {
  let component: OrmComponent;
  let fixture: ComponentFixture<OrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
