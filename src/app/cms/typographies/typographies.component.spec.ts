import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypographiesComponent } from './typographies.component';

describe('TypographiesComponent', () => {
  let component: TypographiesComponent;
  let fixture: ComponentFixture<TypographiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypographiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypographiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
