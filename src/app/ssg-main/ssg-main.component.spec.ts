import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsgMainComponent } from './ssg-main.component';

describe('SsgMainComponent', () => {
  let component: SsgMainComponent;
  let fixture: ComponentFixture<SsgMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsgMainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsgMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
