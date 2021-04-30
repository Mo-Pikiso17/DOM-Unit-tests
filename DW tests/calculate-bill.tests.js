describe("Calculate bill factory function", function(){

    describe("Use values", function(){

    it("should be able to return 4 calls at 2.75 each", function(){

        assert.equal(11.00, calBill("call, call, call, call"));       
    });

    it("should be able to return 3 smses at 0.75 each", function(){

        assert.equal(2.25, calBill("sms, sms, sms"));       
    
    });
})

describe("Warning and Danger levels", function(){

    

    it("should be able to return class name of 'warning' if totals exceeds 20", function(){

        assert.equal(25, calBill("call, call, call, call, sms, sms,call, call, call, call, sms, sms"))

        assert.equal("warning", calClassName());       
    
    });

    it("should be ableto return class name of 'danger' if total exceeds 30", function(){

        assert.equal(36, calBill("call, call, call, call, sms, sms,call, call, call, call, sms, sms, call, call, call, call "))

        assert.equal("danger", calClassName());       
    
    });
})

});
