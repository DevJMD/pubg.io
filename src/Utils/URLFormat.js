import toLowerCase from 'lower-case';

export class URLFormat {

	static build(resource, opts, args) {

		const base   = opts.apiURI;
		const region = `${toLowerCase(args.platform || opts.platform)}-${toLowerCase(args.region || opts.region)}`;
		const url = `${base}/shards/${region}/${resource}`;

		return url;
	}

}
