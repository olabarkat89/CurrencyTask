import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Currency } from '../modules/currency.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyApiService {
  constructor(private httpClient: HttpClient) {}

  /* To get the current currency exchange rates based on the base provided for the given 'toCurrency' */
  getCurrency(): Observable<any> {
    
      return this.httpClient.get<Currency[]>('http://data.fixer.io/api/latest?access_key=5917585a6f534eaca44718a31a9e4765&format=1');
  }
  ExchangeCurrency(from:string , to :string, amount :any):Observable<any> {
    
 
   
    return this.httpClient.get<any>( 'https://data.fixer.io/api/convert?access_key=5917585a6f534eaca44718a31a9e4765'+
   '&from='+ from +
   '&to=' +to +
   '&amount=' +amount);

    // return https://api.api-ninjas.com/v1/convertcurrency?want=EGP&have=KWD&amount=5000
  }

}
