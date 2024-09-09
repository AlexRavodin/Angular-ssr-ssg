import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SsrSecondaryComponent } from './ssr-secondary.component';

describe('SsrSecondaryComponent', () => {
  let component: SsrSecondaryComponent;
  let fixture: ComponentFixture<SsrSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SsrSecondaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SsrSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
