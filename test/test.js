var expect  = require('chai').expect;
const index = require('../index');

describe('Test build', function(){
  it('App should return status fine', function(){
    expect.equal(index(), 'Build Fine');
  });
});
