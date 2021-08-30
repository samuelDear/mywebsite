import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnportfolioComponent } from './ownportfolio.component';

describe('OwnportfolioComponent', () => {
  let component: OwnportfolioComponent;
  let fixture: ComponentFixture<OwnportfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OwnportfolioComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnportfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
