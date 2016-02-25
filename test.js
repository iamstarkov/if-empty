/* eslint-env mocha */
import { equal } from 'assert';
import ifEmpty from './index';

it('should ifEmpty', () => {
  equal(ifEmpty('unicorns')(''), 'unicorns');
  equal(ifEmpty('unicorns', ''), 'unicorns');
  equal(ifEmpty('unicorns', null), 'unicorns');
  equal(ifEmpty('unicorns', null), 'unicorns');
  equal(ifEmpty('unicorns', 'Ben'), true);
  equal(ifEmpty('unicorns')('Ben'), true);
});
