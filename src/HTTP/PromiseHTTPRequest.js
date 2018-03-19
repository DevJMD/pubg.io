import request from 'request-promise';
import { URLFormat } from '../Utils/URLFormat';
import { concatKeysToString } from '../Utils/ConcatString';
import { RequiredParameters } from '../Utils/RequiredParameters';
import { ErrorHandler, HTTPErrorException } from '../Utils/ErrorHandler';

import { reqConfig } from '../request.config';

export class PromiseHTTPRequest {

	static get(params, callback) {

		let response = {}, error;

		// Let's check against the reuqired params using the
		// RequiredParameters `check` function found in Utils/RequiredParameters.
		// If the user hasn't defined the required param(s), throw a new error.
		if (!RequiredParameters.check(params.requiredParams)) {
			return new ErrorHandler(`Missing parameters ${concatKeysToString(params.requiredParams, '{', '}')}`)
		};

		// Set the required/optional values for the query.
		reqConfig.headers.Authorization = params.base.opts.key;
		reqConfig.qs = params.base.args || params.base.args.query;
		reqConfig.uri = params.uri;
		reqConfig.method = 'GET';

		request(reqConfig)

			.then((data) => {
				if (typeof data === 'object') response = data;
			})

			.catch(err => {
				error = err.message;
				return HTTPErrorException(err.response.statusCode);
			})

			.finally(() => {
				if (typeof callback === 'function') {
					return callback(Object.keys(response).length !== 0 ? response : 'Results Empty.', error);
				} else {
					return new ErrorHandler('The callback must be a typeof function(reponse, error) {}.');
				}
			});
		}
}
