import { environment } from '../../environments/environment';

export class AppConstants {
  public static BASE_URL = environment.baseUrl;
  public static SETTINGS = '/setting';
  public static INVENTORY = '/inventory';
  public static BUY_DRINKS = '/buy-drinks';
  public static RETURN_DRINKS = '/return-drinks';
  public static CUSTOMER = '/customer';
  public static LOGS = '/logs';
}
