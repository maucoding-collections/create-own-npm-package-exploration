const { expect } = require("chai")
const { stripTags } = require("../index")

describe("strip tags",  function(){
  it("normal use", function() { 
    const result = stripTags("<div><p>masak apa nih</p></div>")
    expect(result).to.deep.equal("masak apa nih")
   })

   it("using number", function() { 
    const result = stripTags(1500000)
    expect(result).to.deep.equal(1500000)
   })
})