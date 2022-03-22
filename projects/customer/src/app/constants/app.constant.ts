// import { environment } from "src/environments/environment";

import { environment } from "../../environments/environment";

export class AppConstants {

    public static BASE_URL = environment.baseUrl;
    public static INVENTORY = '/inventory';
    public static BUY_DRINKS = '/buy-drinks';
    public static CUSTOMER = '/customer';

    
}