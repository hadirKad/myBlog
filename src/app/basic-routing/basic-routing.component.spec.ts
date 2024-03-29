import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRoutingComponent } from './basic-routing.component';

describe('BasicRoutingComponent', () => {
  let component: BasicRoutingComponent;
  let fixture: ComponentFixture<BasicRoutingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicRoutingComponent]
    });
    fixture = TestBed.createComponent(BasicRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
