describe("The text bill factory function", function(){
    
    it("should be able to add call cost", function(){
        let billTypes = radioBills();

        billTypes.radioBillTotals("call");
        assert.equal(2.75, billTypes.getCallsTotal());

    })

    it("should be able to add sms cost", function(){
        let billTypes = radioBills();

        billTypes.radioBillTotals("sms");
        assert.equal(0.75, billTypes.getSmesTotal());

    })

});

