import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class LogsService {
  constructor(private http: HttpClient) {}

  getAllLogs() {
    return this.http.get(AppConstants.BASE_URL + AppConstants.LOGS);
  }
}
