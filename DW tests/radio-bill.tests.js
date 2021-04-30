describe("The radio bill factory function", function(){
    describe("Use the values", function(){

        it("should be able to make 4 calls at 2.75 each", function(){
            let radioBill = radioBillsBtn();

            radioBill.setRadioDangerLevel(10.00);
            radioBill.radioBillTotals('call');
            radioBill.radioBillTotals('sms');
    
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
    
            assert.equal(11.00, radioBill.getRadioTotalCost());
            assert.equal(11.00, radioBill.getRadioCallsCost());
            assert.equal(0.00, radioBill.getRadioSmsCost());
    
        })

        it("should be able to send 8 sms at 8 each", function(){
            let radioBill = radioBillsBtn();

            radioBill.setRadioDangerLevel(10.00);
            radioBill.radioBillTotals('call');
            radioBill.radioBillTotals('sms');
    
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            

    
            assert.equal(6.75, radioBill.getRadioTotalCost());
            assert.equal(0.00, radioBill.getRadioCallsCost());
            assert.equal(6.75, radioBill.getRadioSmsCost());
    
        })

        it("should be able to send 8 smses at 0.75 each & make 8 calls for 2.75 each", function(){
            let radioBill = radioBillsBtn();

            radioBill.setRadioDangerLevel(10.00);
            radioBill.radioBillTotals('call');
            radioBill.radioBillTotals('sms');


            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
    
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            

    
            assert.equal(28, radioBill.getRadioTotalCost());
            assert.equal(22.00, radioBill.getRadioCallsCost());
            assert.equal(6.00, radioBill.getRadioSmsCost());
    
        })

    });


    describe("Danger and warning levels", function(){
        
        it("should return a class name of 'danger'; if danger level is reached", function(){
            let radioBill = radioBillsBtn();

            radioBill.setRadioDangerLevel(50.00);
            radioBill.setRadioWarningLevel(30.00);
            radioBill.radioBillTotals('call');
            radioBill.radioBillTotals('sms');
            
            
    
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
    
    
    
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
    
            assert.equal("danger", radioBill.radioClassname());
            assert.equal(72, radioBill.getRadioTotalCost());
            
        })

        it("should return a class name of 'warning'; if warning level is reached", function(){
            let radioBill = radioBillsBtn();

            // radioBill.getRadioWarningLevel(30.00);
            // radioBill.getRadioDangerLevel(50.00);

            radioBill.setRadioWarningLevel(30.00);
            radioBill.setRadioDangerLevel(50.00);
            radioBill.radioBillTotals('call');
            radioBill.radioBillTotals('sms');

            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
            radioBill.radioCall();
        
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
            radioBill.radioSms();
    
            assert.equal("warning", radioBill.radioClassname());
            assert.equal(33.5, radioBill.getRadioTotalCost());
        
        })

    });

});



