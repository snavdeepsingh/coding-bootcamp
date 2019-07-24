var disemvowel = require("./04-Disemvowel.js");

var expect = require("chai").expect;

describe("Disemvowel", function(){
    it("should remove vowels from", function(){
        expect(disemvowel("this is lowcase")).to.equal("ths s lwcs");
    });
});