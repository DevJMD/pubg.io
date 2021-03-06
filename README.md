# pubg.io
An ES6 Promise A+ Compliant NodeJS Library for the Official PlayerUnknown: Battlegrounds API.

**PLEASE NOTE** - This is an unfinished wrapper until the PUBG API is officially released to the public. Although tested, I can't guarantee this will consistently work until I have created a full release. You're free to test it if you have an API key, however and will accept collaborations. 🤘

## Install

## Install with Yarn
```
yarn add pubg.io
```

## Install with NPM
```
npm install pubg.io
```

## Import (ES6)
```javascript
import { PUBGAPI } from 'pubg.io';
```

## Defaults
Option | Type | Default | Description
--- | --- | --- | ---
platform | String | 'PC' | The platform to get data from. You can use `PC` or `Xbox`
region | String | 'EU' | The region to get data from. See https://goo.gl/MqbFty for allowed regions.
query | Object | {} | The Query String object to pass additional filters/requests.

## Usage
```javascript
const api = new PUBGAPI('InsertAPIKeyHere');
```

# Match

https://developer.playbattlegrounds.com/docs/en/matches.html

Defaults & Limitations
- Data retention period is 14 days
- The max search time span between createdAt-start and createdAt-end is 14 days.
- If you don’t specify createdAt-start, the default is now() - 14 days.
- If you don’t specify createdAt-end, the default is now().
- If you search for a time > now, the default is now().
- If you search for a time before the retention period, the default is the retention period (now() - 14 days).
- If createdAt-start >= createdAt-end, you will receive an error.


## GET_MATCH
```javascript
api.get('match', { id: Number, ...options }, (match, error) => {
	console.log(match || error);
});
```

## GET_MATCHES
```javascript
api.get('matches', { ...options }, (match, error) => {
	console.log(matches || error);
});
```

# Filters

Use the `query` option to set filters/sorting parameters.

### Oldest First
```javascript
api.get('matches', { query: { sort: 'createdAt' } }, (match, error) => {
	console.log(match || error);
});
```

### Newest First
```javascript
api.get('matches', { query: { sort: '-createdAt' } }, (match, error) => {
	console.log(match || error);
});
```

### Limit
```javascript
// Limit to 2 items
api.get('matches', { query: { 'page[limit]': '2' } }, (match, error) => {
	console.log(match || error);
});
```

### Offset
```javascript
// Offset data by 2 items, returning item 2 through to 5.
api.get('matches', { query: { 'page[limit]': '5', 'page[offset]': '2' } }, (match, error) => {
	console.log(match || error);
});
```


## Testing

Testing is carried out with Mocha. To test, run:
```
npm test
```

## TODO

- Build calls to GET_TELEMETRY data
- Refactor/implement individual calls, i.e.,

```javascript
import {
	PUBGAPI,
	Match,
	Matches
} from 'pubg.io';

const myAPI = new PUBGAPI(key);

const myMatch = new Match(key, ...options, callback);
```
