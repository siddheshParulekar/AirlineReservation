import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsuccessComponent } from './adminsuccess.component';

describe('AdminsuccessComponent', () => {
  let component: AdminsuccessComponent;
  let fixture: ComponentFixture<AdminsuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminsuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminsuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
