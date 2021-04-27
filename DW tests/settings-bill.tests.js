describe("The bill with settings factory function", function(){
    it("should be able to set the call cost", function(){
        let settingsBill = billWithSettings();

        settingsBill.setCallCost(2.75);
        assert.equal(2.75, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();

        settingsBill2.setCallCost(1.75);
        assert.equal(1.75, settingsBill2.getCallCost());
    })

    it("should be able to set the sms cost", function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.75);
        assert.equal(0.75, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();

        settingsBill2.setSmsCost(1.75);
        assert.equal(1.75, settingsBill2.getSmsCost());
    })


    it("should be able to set the sms and call", function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(3.75);
        settingsBill.setCallCost(4.75);

        assert.equal(3.75, settingsBill.getSmsCost());        
        assert.equal(4.75, settingsBill.getCallCost());
    })


    it("should be able to set warning level", function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(20);

        assert.equal(20, settingsBill.getWarningLevel());
    })

    it("should be able to set critical level", function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLevel(50);

        // check if critical level is equal to 50
        assert.equal(50, settingsBill.getCriticalLevel());
    })

    it("should be able to set warning and critical levels", function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLevel(30);
        settingsBill.setCriticalLevel(60);

        assert.equal(30, settingsBill.getWarningLevel());
        assert.equal(60, settingsBill.getCriticalLevel());
    })

});
