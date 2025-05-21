import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserJobsComponent } from './user-jobs/user-jobs.component';

export const routes: Routes = [
    {path: "dashboard", component: DashboardComponent},
    {path: "", component: UserJobsComponent},
];
