import { describe, it } from 'mocha';
import assert from 'assert';

import { Errors } from '../src/Constants/Errors';

describe('Constants / Errors.js', () => {

	it('should be an object', () => assert.equal(typeof Errors, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Errors).length !== 0, true));

	it('should only return string values from each key', () => {

		for (const key of Object.keys(Errors)) {
			assert.equal(typeof Errors[key] === 'string', true);
		}
	});
});
