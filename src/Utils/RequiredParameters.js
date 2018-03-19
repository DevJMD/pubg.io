export class RequiredParameters {

	/**
	 * @function Check
	 * @param {Object} obj
	 */
	static check(obj) {

		if (!obj || !Object.keys(obj).length < 1) return true;

		// Loop over the parameters checking that the param key is set.
		// This isn't a type check of any kind, it's simply checking
		// if the key exists rather that type checking the value.
		for (const key of Object.keys(obj)) {
			if (obj[key] === null || obj[key] === undefined) return false;
		}

		return true;
	}
}
