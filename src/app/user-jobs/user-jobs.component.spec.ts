import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserJobsComponent } from './user-jobs.component';

describe('UserJobsComponent', () => {
  let component: UserJobsComponent;
  let fixture: ComponentFixture<UserJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserJobsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
