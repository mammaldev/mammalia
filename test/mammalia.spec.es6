import chai from 'chai';
import mammalia from '../src/mammalia';

const expect = chai.expect;

describe('Mammalia', () => {

  it('should export a function', () => {
    expect(mammalia).to.be.a('function');
  });
});
