import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFondedComponent } from './not-fonded.component';

describe('NotFondedComponent', () => {
  let component: NotFondedComponent;
  let fixture: ComponentFixture<NotFondedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotFondedComponent]
    });
    fixture = TestBed.createComponent(NotFondedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
