import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographiesEditComponent } from './typographies-edit.component';

describe('TypographiesEditComponent', () => {
  let component: TypographiesEditComponent;
  let fixture: ComponentFixture<TypographiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
