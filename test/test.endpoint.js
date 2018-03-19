import { describe, it } from 'mocha';
import assert from 'assert';

import { Endpoint } from '../src/Constants/Endpoint';

describe('Constants / Endpoint.js', () => {

	it('should be an object', () => assert.equal(typeof Endpoint, 'object'));

	it('should not be empty', () => assert.equal(Object.keys(Endpoint).length !== 0, true));

	it('should only contain functions as values', () => {

		for (const key of Object.keys(Endpoint)) {
			assert.equal(typeof Endpoint[key] === 'function', true);
		}
	});

	describe('function() => GET_MATCH', () => {
		it('should be an function', () => assert.equal(typeof Endpoint.GET_MATCH, 'function'));
	});

	describe('function() => GET_MATCHES', () => {
		it('should be an function', () => assert.equal(typeof Endpoint.GET_MATCHES, 'function'));
	});
});
