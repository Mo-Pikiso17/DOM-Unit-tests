function billWithSettings(){
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    //set
    function setCallCost(callCost){
        theCallCost = callCost;
    }

    //get and retun
    function getCallCost(){
        return theCallCost;
    }

    //set
    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }

    //get and return
    function getSmsCost(){
        return theSmsCost;
    }

    //set
    function setWarningLevel(warningLevel){
        theWarningLevel = warningLevel;
    }
    
    //get and return
    function getWarningLevel(warningLevel){
        return theWarningLevel;
    }

    //set
    function setCriticalLevel(criticalLevel){
        theCriticalLevel = criticalLevel;
    }

    //get and return
    function getCriticalLevel(){
        return theCriticalLevel;
    }

    return{
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        setWarningLevel,
        getWarningLevel,
        setCriticalLevel,
        getCriticalLevel
    }
}