import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecodeComponent } from './recode.component';

describe('RecodeComponent', () => {
  let component: RecodeComponent;
  let fixture: ComponentFixture<RecodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecodeComponent]
    });
    fixture = TestBed.createComponent(RecodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
