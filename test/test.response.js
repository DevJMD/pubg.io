import { describe, it } from 'mocha';
import assert from 'assert';

import { Response } from '../src/Constants/Response';

describe('Constants / Response.js', () => {

	it('should be an object', () => assert.equal(typeof Response, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Response).length !== 0, true));

	it('should only return string values from each key', () => {

		for (const key of Object.keys(Response)) {
			assert.equal(typeof Response[key] === 'string', true);
		}
	});

	it('should contain HTTP response codes 200, 401, 404, 415, 429, 500', () => {

		let httpResponseCodes = [200, 401, 404, 415, 429, 500];
		let idx = 0;

		for (const key of Object.keys(Response)) {
			assert.equal(key.toString() === httpResponseCodes[idx].toString(), true);
			idx++;
		}
	});
});
