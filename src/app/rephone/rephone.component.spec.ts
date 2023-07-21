import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RephoneComponent } from './rephone.component';

describe('RephoneComponent', () => {
  let component: RephoneComponent;
  let fixture: ComponentFixture<RephoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RephoneComponent]
    });
    fixture = TestBed.createComponent(RephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
