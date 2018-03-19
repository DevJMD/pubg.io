import { Region   } from './Constants/Region';
import { Endpoint } from './Constants/Endpoint';
import { Types    } from './Constants/Region';
import { Errors   } from './Constants/Errors';
import { Resource } from './Constants/Resource';

import { ErrorHandler } from './Utils/ErrorHandler';

import { typeCheck } from 'type-check';
import toLowerCase from 'lower-case';

export class PUBGAPI {

	constructor(key, options = {}) {

		let defaults = {
			key: key,

			/**
			 * API Endpoint
			 */
			apiURI: 'https://api.playbattlegrounds.com',

			/**
			 * Available Regions
			 *
			 *      Xbox : AS, EU, NA, OC, KRJP
			 *      PC   : AS, EU, NA, OC, KRJP, SA, SEA, KAKAO
			 */
			platform : options.platform || 'pc',
			region   : options.region || 'eu'
		}

		this.options = Object.assign(defaults, options);
	}

	/**
	 *
	 * @function    getMatch
	 *
	 * @type        {Function}
	 * @param       {String}    resource
	 * @param       {Object}    args
	 * @param       {Function}  callback
	 *
	 * Available Resources
	 *
	 * 		Match: 'match'
	 * 		Matches: 'matches'
	 *
	 */
	get(resource, args, callback) {

		// Check that the parameters are met with the correct types.
		if (!typeCheck('String', resource) || !typeCheck('Object', args) || !typeCheck('Function', callback)) {

			return new ErrorHandler(
				`fn.get() Arguments must be typeof (in order) fn(String, Object, Function). We found fn(${resource}, ${args}, ${callback})`
			);
		}

		for (const key of Object.keys(Resource)) {

			// Let's build our endpoints.
			// These are generated based on the resource name, for example:
			//
			// Endpoint(GET_[RESOURCE<Key>], Object{ this.options }, Object{ args }, Function( callback ))
			//
			if (resource === Resource[key].name) {
				return Endpoint['GET_' + [key]](Resource[key].uri, this.options, args, callback);
			}
		}

		// If the resource isn't found, return an error.
		return new ErrorHandler(`API Resource type "${resource}" does not exist.`);
	}
}
