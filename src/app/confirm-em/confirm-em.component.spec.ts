import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEmComponent } from './confirm-em.component';

describe('ConfirmEmComponent', () => {
  let component: ConfirmEmComponent;
  let fixture: ComponentFixture<ConfirmEmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmEmComponent]
    });
    fixture = TestBed.createComponent(ConfirmEmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
