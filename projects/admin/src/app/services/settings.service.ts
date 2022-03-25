import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  getAllSettings() {
    return this.http.get(AppConstants.BASE_URL + AppConstants.SETTINGS);
  }
}
