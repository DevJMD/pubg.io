# PUBG-Node-Wrapper
An ES6 Promise A+ Compliant NodeJS Library for the Official PlayerUnknown: Battlegrounds API.

## Install

## Install with Yarn
```
yarn add pubg-node-wrapper
```

## Install with NPM
```
npm install pubg-node-wrapper
```

## Import (ES6)
```javascript
import { PUBGAPI } from 'pubg.io';
```

## Defaults
Option | Type | Default
--- | --- | ---
platform | String | 'PC'
region | String | 'EU'

## Usage
```javascript
const api = new PUBGAPI('InsertAPIKeyHere');
```

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
