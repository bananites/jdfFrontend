import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserJobsComponent } from '../user-jobs/user-jobs.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule, UserJobsComponent, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {


}
