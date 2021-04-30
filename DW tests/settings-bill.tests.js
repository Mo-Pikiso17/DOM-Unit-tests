describe("The bill with settings factory function", function(){

    describe("Set the values", function(){
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

    describe("Use the values", function(){

        it("should be able to use the call cost set for 4 calls 1.75", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(10.00);
            settingsBill.setCallCost(1.75);
            settingsBill.setSmsCost(0.75);
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
    
            assert.equal(7.00, settingsBill.getTotalCost());
            assert.equal(7.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
    
    
        })


        it("should be able to use the call cost set for 6 calls at 6 each", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(38.00);
    
            settingsBill.setCallCost(6.00);
            settingsBill.setSmsCost(0.75);
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
    
            assert.equal(36.00, settingsBill.getTotalCost());
            assert.equal(36.00, settingsBill.getTotalCallCost());
            assert.equal(0.00, settingsBill.getTotalSmsCost());
    
    
        })

        it("should be able to send 3 smses at 2 each", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(10.00);
    
            settingsBill.setCallCost(6.00);
            settingsBill.setSmsCost(2.00);
    
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            
    
            assert.equal(6.00, settingsBill.getTotalCost());
            assert.equal(0.00, settingsBill.getTotalCallCost());
            assert.equal(6.00, settingsBill.getTotalSmsCost());
    
        })

        it("should be able to send 2 smses at 2 each & make 3 calls for 5 each", function(){
            let settingsBill = billWithSettings();

            settingsBill.setCriticalLevel(20.00);
    
            settingsBill.setCallCost(5.00);
            settingsBill.setSmsCost(2.00);
    
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            
    
            assert.equal(19.00, settingsBill.getTotalCost());
            assert.equal(15.00, settingsBill.getTotalCallCost());
            assert.equal(4.00, settingsBill.getTotalSmsCost());
    
        })


    });


    describe("Using the critical and warning levels", function(){
        
        it("should return a class name of 'warning'; if warning level is reached", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(3.00);
            settingsBill.setSmsCost(1.50);

            settingsBill.setWarningLevel(20.00);
            settingsBill.setCriticalLevel(40.00);
    
            
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall(); 
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
    
            assert.equal("warning", settingsBill.totalClassName());
            
        })

        it("should return a class name of 'critical'; if critical level is reached", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(3.00);
            settingsBill.setSmsCost(1.50);
            settingsBill.setCriticalLevel(40.00);
            settingsBill.setWarningLevel(0.00);
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
    
            assert.equal("critical", settingsBill.totalClassName());
        
        })

        it("should stop the total call cost from increasing; if critical level is reached", function(){
            let settingsBill = billWithSettings();
    
            settingsBill.setCallCost(3.00);
            settingsBill.setSmsCost(1.50);
            settingsBill.setCriticalLevel(42.00);
    
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.makeCall();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
            settingsBill.sendSms();
    
            assert.equal("critical", settingsBill.totalClassName());
            assert.equal(42, settingsBill.getTotalCallCost());
        
        })

        
    })

});

