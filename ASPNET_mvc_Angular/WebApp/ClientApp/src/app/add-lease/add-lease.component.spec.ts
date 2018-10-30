import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeaseComponent } from './add-lease.component';

describe('AddLeaseComponent', () => {
  let component: AddLeaseComponent;
  let fixture: ComponentFixture<AddLeaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
