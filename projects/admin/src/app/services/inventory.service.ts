import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConstants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  getAllInventories() {
    return this.http.get(AppConstants.BASE_URL + AppConstants.INVENTORY);
  }
}
