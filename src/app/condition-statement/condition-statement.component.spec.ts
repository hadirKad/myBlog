import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionStatementComponent } from './condition-statement.component';

describe('ConditionStatementComponent', () => {
  let component: ConditionStatementComponent;
  let fixture: ComponentFixture<ConditionStatementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConditionStatementComponent]
    });
    fixture = TestBed.createComponent(ConditionStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
