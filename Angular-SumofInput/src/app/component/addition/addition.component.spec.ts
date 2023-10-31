import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionComponent } from './addition.component';

describe('AdditionComponent', () => {
  let component: AdditionComponent;
  let fixture: ComponentFixture<AdditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdditionComponent]
    });
    fixture = TestBed.createComponent(AdditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
