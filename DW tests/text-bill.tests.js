describe("The text input bill factory function", function(){
    describe("Use the values", function(){
    it("should be able make 3 call at 2.75 each", function(){
        let billTypes = textBills();

        billTypes.setTextDangerLevel(10.00);
        billTypes.textBillTotal("call");
        billTypes.textBillTotal("sms");

        billTypes.textCall();
        billTypes.textCall();
        billTypes.textCall();

        assert.equal(8.25, billTypes.getTextTotalCost());
        assert.equal(8.25, billTypes.getTextCallTotal());
        assert.equal(0.00, billTypes.getTextSmsTotal());

    });

    it("should be able to send 2 smses at 0.75 each", function(){
        let billTypes = textBills();

        billTypes.setTextDangerLevel(10.00);
        billTypes.textBillTotal("call");
        billTypes.textBillTotal("sms");

        billTypes.textSms();
        billTypes.textSms();

        assert.equal(1.5, billTypes.getTextTotalCost());
        assert.equal(0.00, billTypes.getTextCallTotal());
        assert.equal(1.5, billTypes.getTextSmsTotal());

    });

    it("should be able to send 5 smses at 0.75 each and 6 call 2.75 each", function(){
        let billTypes = textBills();

        billTypes.setTextDangerLevel(10.00);
        billTypes.textBillTotal("call");
        billTypes.textBillTotal("sms");

        billTypes.textSms();
        billTypes.textSms();
        billTypes.textSms();
        billTypes.textSms();
        billTypes.textSms();
        
        billTypes.textCall();
        billTypes.textCall();
        billTypes.textCall();
        billTypes.textCall();
        billTypes.textCall();
        billTypes.textCall();


        assert.equal(20.25, billTypes.getTextTotalCost());
        assert.equal(16.5, billTypes.getTextCallTotal());
        assert.equal(3.75, billTypes.getTextSmsTotal());

    });
});


    describe("Danger and warning levels", function(){
        
        it("should return a class name of 'danger'; if danger level is reached", function(){
            let billTypes = textBills();

            billTypes.setTextDangerLevel(50.00);
            billTypes.setTextWarningLevel(30.00);
            billTypes.textBillTotal("call");
            billTypes.textBillTotal("sms");
            
            
    
            billTypes.textSms();
            billTypes.textSms();
            billTypes.textSms();
            billTypes.textSms();
            billTypes.textSms();
        
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
        
            assert.equal("danger", billTypes.textClassname());
            assert.equal(53.25, billTypes.getTextTotalCost());

            
        })

        it("should return a class name of 'warning'; if warning level is reached", function(){
            let billTypes = textBills();

            billTypes.setTextDangerLevel(50.00);
            billTypes.setTextWarningLevel(30.00);
            billTypes.textBillTotal("call");
            billTypes.textBillTotal("sms");
            
            
    
            billTypes.textSms();
            billTypes.textSms();
            billTypes.textSms();
            
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();
            billTypes.textCall();

            assert.equal("warning", billTypes.textClassname());
            assert.equal(35.25, billTypes.getTextTotalCost());
        
        })

    });


})