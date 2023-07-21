import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconfirmComponent } from './reconfirm.component';

describe('ReconfirmComponent', () => {
  let component: ReconfirmComponent;
  let fixture: ComponentFixture<ReconfirmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReconfirmComponent]
    });
    fixture = TestBed.createComponent(ReconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
