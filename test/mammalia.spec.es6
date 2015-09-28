import chai from 'chai';
import mammalia from '../src/mammalia';

const expect = chai.expect;

describe('Mammalia', () => {

  it('should export a function', () => {
    expect(mammalia).to.be.a('function');
  });

  it('should return a string', () => {
    expect(mammalia()).to.be.a('string');
  });

  // TODO: Investigate if this could be tested better... since the output is
  // random a result of length 1 could just be down to chance.
  it('should allow configuration of word count', () => {
    expect(mammalia({
      maxWords: 1,
    }).split(' ')).to.have.length(1);
  });
});
