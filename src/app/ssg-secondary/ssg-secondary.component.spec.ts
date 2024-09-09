import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsgSecondaryComponent } from './ssg-secondary.component';

describe('SsgSecondaryComponent', () => {
  let component: SsgSecondaryComponent;
  let fixture: ComponentFixture<SsgSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsgSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsgSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
