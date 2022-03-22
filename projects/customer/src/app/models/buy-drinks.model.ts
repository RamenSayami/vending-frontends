
export class BuyDrinks {
    
    constructor(inventoryId: number, {quantity , coins} : any){
        this.inventoryId = inventoryId;
        this.coins = coins;
        this.quantity = quantity;
    }
    // constructor() {}
    inventoryId: number | undefined;

    quantity: number | undefined;

    coins: number | undefined;


}