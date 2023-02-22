import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from  './bill';
import { BillDTO } from './bill-dto';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class BillingOperationsService 
{
  ///{bid}/Restaurant/{rid}
  constructor(private http:HttpClient) { }
  baseURL:string = 'http://localhost:2003';
  submitBillEndPoint:string=this.baseURL+'/bill/register';
  updateRestaurantWithBillEndPoint:string=this.baseURL+'/bill'
  
  getBillArr(){
  return[];
  }

  submitBill(bill:Bill):Observable<Bill>{
    console.log("inside the method :"+bill);

    return this.http.post<Bill>(`${this.submitBillEndPoint}`,bill);
  }

  updateRestaurantWithBill(bid:number,rid:number)
  {
  
    this.updateRestaurantWithBillEndPoint=this.updateRestaurantWithBillEndPoint+'/'+bid+'/'+rid;
    this.http.put<Bill[]>(`${this.updateRestaurantWithBillEndPoint}`,Bill)

  
  
  }
}
   
