const chai = require('chai')
const expect = chai.expect
const fibanocii = require('../')
describe('Test Fibanocii', () => {
  it('Should return 5 for 5', () => {
    expect(fibanocii(5)).to.be.equal(5)
  })
})
