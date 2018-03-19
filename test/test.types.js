import { describe, it } from 'mocha';
import assert from 'assert';

import { Types } from '../src/Constants/Types';

describe('Constants / Types.js', () => {

	it('should be an object', () => assert.equal(typeof Types, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Types).length !== 0, true));

	it('should only return string values from each key', () => {

		for (const key of Object.keys(Types)) {
			assert.equal(typeof Types[key] === 'string', true);
		}
	});
});
