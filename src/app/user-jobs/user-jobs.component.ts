import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {  ScrollingModule} from "@angular/cdk/scrolling";

export interface job {
  name: string;
  machine: string;
  user: string;
}

@Component({
  selector: 'app-user-jobs',
  imports: [MatCardModule, ScrollingModule],
  templateUrl: './user-jobs.component.html',
  styleUrl: './user-jobs.component.scss'
})


export class UserJobsComponent {

  jobList: job[] = [
    { name: "Print Invoice", machine: "Printer-01", user: "alice" },
    { name: "Backup Database", machine: "Server-02", user: "bob" },
    { name: "Compile Code", machine: "BuildMachine-01", user: "charlie" },
    { name: "Scan Documents", machine: "Scanner-03", user: "diana" },
    { name: "Render Video", machine: "RenderNode-07", user: "eve" }
  ];


  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

}
