var assert  = require('chai').assert;
const index = require('../index');

describe('Test build', function(){
  it('App should return status fine', function(){
    assert.equal(index(), 'Build Fine');
  });
});
