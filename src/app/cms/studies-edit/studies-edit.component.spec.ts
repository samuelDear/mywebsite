import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesEditComponent } from './studies-edit.component';

describe('StudiesEditComponent', () => {
  let component: StudiesEditComponent;
  let fixture: ComponentFixture<StudiesEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudiesEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
