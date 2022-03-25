import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BuyDrinks } from './models/buy-drinks.model';
import { CustomerService } from './services/customer.service';
import { InventoryService } from './services/inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private inventoryService: InventoryService
  ) { }

  inventories: any[] = [];
  selectedDrink: any;
  returnDrink : any;
  // quantity: number | undefined;
  // coins: number | undefined;
  reciept: any;
  coinValue: any;
  successMessage: string|undefined;
  errorMessage: string|undefined;

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getAllInventories();
  }

  getAllInventories() {
    this.inventoryService.getAllInventories().subscribe({

      next: (res: any) => {
        console.log(res);
        this.inventories = res.data;
      },
      error: (err: any) => {
        console.log(err);
        //toast here
      }
    }

    );
  }

  selectInventory(inventory: any) {
    console.log(inventory);
    this.returnDrink = undefined;
    this.selectedDrink = inventory;
  }

  returnInventory(inventory: any) {
    console.log(inventory);
    this.selectedDrink = undefined;
    this.returnDrink = inventory;
  }

  buyDrinks(form: NgForm) {
    console.log(this.selectInventory);
    // console.log(this.quantity);
    // console.log(this.coins);
    console.log(form.value);
    this.errorMessage = undefined;
    this.successMessage = undefined;
    this.reciept = undefined;
    var buyDrinks = new BuyDrinks(this.selectedDrink.id, form.value);
    this.customerService.buyDrinks(buyDrinks).subscribe({
      next: (res: any) => {
        this.reciept = res.data;
        console.log(res);
        this.successMessage = res.message;
        console.log(res.message);
        // console.log(res.data);
        this.getAllInventories();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      }
    })
  }

  returnDrinks(form: NgForm) {
    console.log(form.value);
    var returnDrinks = new BuyDrinks(this.selectedDrink.id, form.value);
    this.customerService.buyDrinks(returnDrinks).subscribe({
      next: (res: any) => {
        this.reciept = res.data;
        console.log(res);
        this.successMessage = res.message;
        console.log(res.message);
        // console.log(res.data);
        this.getAllInventories();
      },
      error: (err) => {
        this.errorMessage = err.error.message;
        console.log(err);
      }
    })
  }

  title = 'customer';
}
