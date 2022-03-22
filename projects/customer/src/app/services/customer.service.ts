import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BuyDrinks } from '../models/buy-drinks.model';
import { AppConstants } from '../constants/app.constant';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http: HttpClient
  ) { }


  buyDrinks(buyDrinks: BuyDrinks) {
    return this.http.post(AppConstants.BASE_URL +
      AppConstants.CUSTOMER +
      AppConstants.BUY_DRINKS
      ,buyDrinks);
  }
}
