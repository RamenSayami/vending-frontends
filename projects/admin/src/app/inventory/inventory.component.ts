import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  constructor(private inventoryService: InventoryService) {}
  inventories: any[] = [];

  ngOnInit(): void {
    this.getAllInventories();
  }

  getAllInventories() {
    console.log('started')
    this.inventoryService.getAllInventories().subscribe({
      next: (res: any) => {
        this.inventories = res.data;
      },
      error: (err: any) => {
        console.log(err.message);
      },
    });
  }

  editInventory(inventory: any) {
    console.log('Edit inventory', inventory);
  }

  deleteInventory(inventory: any) {
    console.log('Delete inventory', inventory);
  }
}
