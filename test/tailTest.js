const tail = require('../tail');
const expect = require('chai').expect;

describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.eql(["Lighthouse", "Labs"]);
  });
});