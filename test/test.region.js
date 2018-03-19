import { describe, it } from 'mocha';
import assert from 'assert';

import { Region } from '../src/Constants/Region';

describe('Constants / Region.js', () => {

	it('should be an object', () => assert.equal(typeof Region, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Region).length !== 0, true));

	it('should only return string values from each key', () => {

		for (const key of Object.keys(Region.Xbox)) {
			assert.equal(typeof Region.Xbox[key] === 'string', true);
		}

		for (const key of Object.keys(Region.PC)) {
			assert.equal(typeof Region.PC[key] === 'string', true);
		}
	});
});
