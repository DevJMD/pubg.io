import toLowerCase from 'lower-case';
import { URLFormat } from '../Utils/URLFormat';
import { PromiseHTTPRequest } from '../HTTP/PromiseHTTPRequest';

export const Endpoint = {

	/**
	 *
	 * @function GET_MATCH
	 * @returns {cb(response, error)}
	 *
	 * @argument {resource, options, arguments, callback}
	 *
	 */
	GET_MATCH: (resource, opts, args, cb) => {

		return new PromiseHTTPRequest.get({
			base: {
				resource,
				opts,
				args,
				cb
			},
			requiredParams: {
				id: args.id
			},
			uri: `${URLFormat.build(resource, opts, args)}/${args.id}`
		}, cb);
	},

	/**
	 *
	 * @function GET_MATCHES
	 * @returns {cb(response, error)}
	 *
	 * @argument {resource, options, arguments, callback}
	 *
	 */
	GET_MATCHES: function(resource, opts, args, cb) {

		return new PromiseHTTPRequest.get({
			base: {
				resource,
				opts,
				args,
				cb
			},
			requiredParams: {},
			uri: `${URLFormat.build(resource, opts, args)}`,
		}, cb);
	},
};
