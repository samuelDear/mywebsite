import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsEditComponent } from './colors-edit.component';

describe('ColorsEditComponent', () => {
  let component: ColorsEditComponent;
  let fixture: ComponentFixture<ColorsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColorsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
