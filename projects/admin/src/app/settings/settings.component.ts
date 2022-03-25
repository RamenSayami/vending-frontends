import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private settingService: SettingsService) {}

  settings: any[] = [];

  ngOnInit(): void {
    this.getAllSettings();
  }

  getAllSettings() {
    console.log('started');
    this.settingService.getAllSettings().subscribe({
      next: (res: any) => {
        this.settings = res.data;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }

  editSetting(setting: any) {

  }
}
