export function concatKeysToString(args, prefix, suffix) {

	let str = '';

	for (const arg of Object.keys(args)) {
		str = str.concat(`${prefix}${arg}${suffix} `);
	}

	return str;
}
