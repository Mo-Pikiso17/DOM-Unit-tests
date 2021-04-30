
    function textBills(){
    var textCallTotal = 0;
    var textSmsTotal = 0;
    var textTotal = 0;
    var textDangerLevel = 0;
    var textWarningLevels = 0;
    var textCallCost = 0;
    var textSmsCost = 0;
    



    // get and return
    function getTextCallTotal(){
        return textCallTotal;

    }

    function getTextSmsTotal(){
        return textSmsTotal;
    }

    function getTextTotalCost(){
        return textCallTotal + textSmsTotal;
    }



    //set
function setTextWarningLevel(tWarningLevel){
    textWarningLevels = tWarningLevel;
}

function getTextWarningLevels(){
    return textWarningLevels;
}

//set
function setTextDangerLevel(tDangerLevel){
    textDangerLevel = tDangerLevel;
}





function getTextDangerLevel(){
    return textDangerLevel;
}

function textCall(){

    textCallTotal += textCallCost;
}

function textSms(){

    textSmsTotal += textSmsCost;
}





    

function textBillTotal(billTypeEntered){    
    if (billTypeEntered === "call"){
        textCallCost += 2.75;
            textTotal += 2.75;
        }
        
    else if (billTypeEntered === "sms"){
        textSmsCost += 0.75;
            textTotal += 0.75;
        }
    
}

function textClassname(){
    if (getTextTotalCost() >= 30 && getTextTotalCost() < 50){
        return "warning";
    }

    if (getTextTotalCost() >= 50){
        return "danger";
    }
}


return{
    getTextCallTotal,
    getTextSmsTotal,
    textBillTotal,
    textBills,
    getTextTotalCost,
    textClassname,
    getTextWarningLevels,
    getTextDangerLevel,
    setTextWarningLevel,
    setTextDangerLevel,
    textCall,
    textSms
}

}