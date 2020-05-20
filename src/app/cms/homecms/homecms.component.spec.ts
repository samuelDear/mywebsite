import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomecmsComponent } from './homecms.component';

describe('HomecmsComponent', () => {
  let component: HomecmsComponent;
  let fixture: ComponentFixture<HomecmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomecmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomecmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
