import { red, yellow, green, bold, italic, bgRed } from 'colors/safe';
import { Response } from '../Constants/Response';

export class ErrorHandler {

	constructor(message = String, verbose = false) {

		const msgs = [
			"Oh, For Chicken\'s Sake.",
			"Nope. Computer Said Nope.",
			"Oops! Do You No De Wey?",
			"Wadu Hek!"
		];

		console.log(bgRed(red('--')  ));
		console.log(`${bgRed(red('--'))}` + bold(`${italic(' ' + red(msgs[Math.floor(Math.random() * msgs.length)]))}` + ' 😬'));
		console.log(`${bgRed(red('--'))}` + `${yellow(' ' + message)}`);
		console.log(bgRed(red('--')  ));

		if (verbose) throw new Error(message);

		return;
	}
}

export function HTTPErrorException(statusCode) {
	for (const key of Object.keys(Response)) {
		if (statusCode.toString() === key.toString()) return new ErrorHandler(`Error ${key}: ${Response[key]}`);
	}
}
