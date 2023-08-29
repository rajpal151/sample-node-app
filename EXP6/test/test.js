var {expect}  = require("chai");
var request = require("request");
let cat={
  title:'',
  subTitle:'',
  description:'',
  path:''
};
let url = 'http://localhost:3000/api/cat';

describe("To test POST api", function () {
  it("Posting cat into the DB", function (done) {
    request.post({ url: url, form: cat }, function (error, response, body) {
    
      let ob = JSON.parse(body);

      expect(ob.message).to.equal('success');
      done();
    });
  });
});

describe("Test GET api", function () {
  it('Checking the get api', function (done) {
    request(url, function (error, response, body) {
     
      let ob = JSON.parse(body);
    
      expect(ob.message).to.equal('success');
      done();
    });
  });
});

describe("Testing DELETE api", function () {
  it("Deleting cat from the DB", function (done) {
    request.delete({ url: url, form: cat }, function (error, response, body) {
     
      done();
    });
  });
});