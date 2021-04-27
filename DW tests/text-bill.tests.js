describe("The text bill factory function", function(){
    it("should be able to get the total call cost", function(){
        let billTypes = textBills();

        billTypes.textBillTotal("call");
        assert.equal(2.75, billTypes.getCallTotal());

    });

    it("should be able to get the total sms", function(){
        let billTypes = textBills();

        billTypes.textBillTotal("sms");
        assert.equal(0.75, billTypes.getSmsTotal());

    });


})