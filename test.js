/* eslint-env mocha */
import { equal } from 'assert';
import ifEmpty from './index';

it('should ifEmpty', () =>
  equal(ifEmpty('unicorns'), 'unicorns'));

it('should ifEmpty invalid input', () =>
  equal(ifEmpty(), undefined));
