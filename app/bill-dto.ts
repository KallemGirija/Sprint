export class BillDTO 
{
    billId:number;
    itemCount:number;
	 totalAmount:number;
	 gstAmount:number;
     
     constructor(
        billId:number,
        itemCount:number,
        totalAmount:number,
        gstAmount:number,
       
       
   ){
       
    this.billId=billId;
    this.itemCount=itemCount;
    this.totalAmount=totalAmount;
    this.gstAmount=gstAmount;
    
   }
}
