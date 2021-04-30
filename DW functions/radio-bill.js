function radioBillsBtn(){

var radioCallTotal= 0;
var radioSmsTotal = 0;
var radioWarningLevel = 0;
var radioDangerLevel = 0;
var radioCallCost = 0;
var radioSmsCost = 0;


function getRadioCallsCost(){
    return radioCallTotal;
}


function getRadioSmsCost(){
    return radioSmsTotal;
}


function getRadioTotalCost(){
    return radioCallTotal + radioSmsTotal;
}

//set
function setRadioWarningLevel(warnLevel){
    radioWarningLevel = warnLevel;
}

//set
function setRadioDangerLevel(danLevel){
    radioDangerLevel = danLevel;
}


function getRadioWarningLevel(){
    return radioWarningLevel;
}


function getRadioDangerLevel(){
    return radioDangerLevel;
}

function radioCall(){

    radioCallTotal += radioCallCost;
}

function radioSms(){

    radioSmsTotal += radioSmsCost;
}



function radioClassname(){
    if (getRadioTotalCost() >= 30 &&  getRadioTotalCost() < 50){
        return "warning";
    }

    if (getRadioTotalCost() >= 50 ){
        return "danger";
    }
}

function radioBillTotals(checkedRadioBtn) {
    
    if (checkedRadioBtn) {
        var billItemType = checkedRadioBtn
        
        if (billItemType === 'call') {
            radioCallCost += 2.75;
        }

        else if (billItemType === 'sms') {
            radioSmsCost += 0.75;
        }

    }

}


    return{
        getRadioCallsCost,
        getRadioSmsCost,
        getRadioTotalCost,
        getRadioWarningLevel,
        getRadioDangerLevel,
        radioClassname,
        radioCall,
        radioSms,
        setRadioWarningLevel,
        setRadioDangerLevel,
        radioBillTotals
    }
    
}

