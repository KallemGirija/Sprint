import { Component } from '@angular/core';
import { Bill } from '../bill';
import { BillingOperationsService } from '../billing-operations.service';
import { HttpClient } from '@angular/common/http';
import { BillDTO } from '../bill-dto';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-admin-work',
  templateUrl: './admin-work.component.html',
  styleUrls: ['./admin-work.component.css']
})
export class AdminWorkComponent 
{

  __billService: BillingOperationsService;
  status = false;
  message = '';
  b:Bill  = new Bill(0,0,0,0);
  r:Restaurant = new Restaurant(0,'', '', '', '', '', '', '', '', '','','');

  constructor(billService: BillingOperationsService,private http:HttpClient) {
    this.__billService = billService;
  }

  onSubmitBill() {
    console.log(this.b);
    this.__billService.submitBill(this.b).subscribe(

      data=>{
        this.status=true;
        this.message="Bills submitted";

      },
      error=>{

      }

    )
  
  }

  updateBillWithRestaurant(bid:number,rId:number){

    
  }
 

}
      
  