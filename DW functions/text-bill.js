
    function textBills(){
    var theCallTotal = 0;
    var theSmsTotal = 0;
    var theTotal = 0;
    

    // //set
    // function setCallTotal(callTotal){
    //     theCallTotal = callTotal;
    // }


    // get and return
    function getCallTotal(){
        return theCallTotal;

    }

    function getSmsTotal(){
        return theSmsTotal;
    }

    function getTotal(){
        theTotal = theCallTotal + theSmsTotal;
        return theTotal;
    }

    

function textBillTotal(billTypeEntered){    
    if (billTypeEntered === "call"){
        theCallTotal += 2.75;
            theTotal += 2.75;
        }
        
    else if (billTypeEntered === "sms"){
        theSmsTotal += 0.75;
            theTotal += 0.75;
        }
    
}

return{
    // setCallTotal,
    getCallTotal,
    getSmsTotal,
    textBillTotal,
    textBills,
    getTotal
}

}