import { describe, it } from 'mocha';
import assert from 'assert';

import { concatKeysToString } from '../src/Utils/ConcatString';

describe('Utils / ConcatString.js', () => {

	it('should be a function', () => assert.equal(typeof concatKeysToString, 'function'));

	describe('concatKeysToString({ 1: null, 2: null, 3: null }, "(", ")")', () => {
		it('should return (1) (2) (3)', () => {
			var dummy = { 1: null, 2: null, 3: null };
			var result = '(1) (2) (3) ';

			assert.equal(concatKeysToString(dummy, '(', ')') === result, true);
		});
	})
});
