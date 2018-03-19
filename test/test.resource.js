import { describe, it } from 'mocha';
import assert from 'assert';

import { Resource } from '../src/Constants/Resource';

describe('Constants / Resource.js', () => {

	it('should be an object', () => assert.equal(typeof Resource, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Resource).length !== 0, true));

	it('should only return object values from each key', () => {

		for (const key of Object.keys(Resource)) {
			assert.equal(typeof Resource[key] === 'object', true);
		}
	});
});
