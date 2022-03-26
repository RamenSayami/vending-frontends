import { Component, OnInit } from '@angular/core';
import { LogsService } from '../services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss'],
})
export class LogsComponent implements OnInit {
  constructor(private logsService: LogsService) {}

  logs: any[] = [];
  ngOnInit(): void {
    this.getAllLogs();
  }

  getAllLogs() {
    this.logsService.getAllLogs().subscribe({
      next : (res: any) => {
        this.logs = res.data;
      },
      error: (err : any) => {
        console.log(err.error.message);
      }
    })
  }
}
