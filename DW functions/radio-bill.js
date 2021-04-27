function radioBills(){

var callsCost= 0;
var smsesCost = 0;
var theTotals = 0;


function getCallsCost(){
    retun callsCost;
}


function getSmesCost(){
    retun smsesCost;
}

function getTotals(){
    theTotals = theCallsCost + theSmsesCost;
    return theTotals;
}


function radioBillTotals(checkedRadioBtn) {
    if (checkedRadioBtn) {
        if (billItemType === 'call') {
            callsCost += 2.75;
          
        }

        else if (billItemType === 'sms') {
            smsesCost+= 0.75;
            
        }

    }

}


    return{
        // setCallTotal,
        radioBills,
        radioBillTotals,
        getTotals,
        getCallsCost,
        getSmsesCost,
    }
    
}
