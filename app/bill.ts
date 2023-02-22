export class Bill
{
     billId:number;
     itemCount:number;
	 grossBillAmount:number;
	 gstAmount:number;
     
     

    constructor(
        
        billId:number,
        itemCount:number,
        grossBillAmount:number,
        gstAmount:number,
        
       

        
    ){
       
        this.billId=billId;
        this.itemCount=itemCount;
        this.grossBillAmount=grossBillAmount;
        this.gstAmount=gstAmount;
       

    }

}
