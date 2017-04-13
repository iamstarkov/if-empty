# if-empty

[![Greenkeeper badge](https://badges.greenkeeper.io/iamstarkov/if-empty.svg)](https://greenkeeper.io/)

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> If `value` (second argument) is empty return `reason` (first argument) otherwise return `true`

## Install

    npm install --save if-empty

## Usage

```js
import ifEmpty from 'if-empty';

ifEmpty('You have to provide name', '');    // "You have to provide name"
ifEmpty('You have to provide name', 'Ben'); // true, `value` is not empty
```

Also useful for validating inquirer prompts, as well as yeoman prompts
```js
import inquirer from 'inquirer';

inquirer.prompt([{
  name: 'name',
  message: '☯ your name:',
  validate: ifEmpty('You have to provide name'), // curried
}], function(answers) {
  console.log(answers);
});
```

## API

### ifEmpty(reason, value)

```js
// ifEmpty :: String -> String -> true | String`
```

#### reason

*Required*  
Type: `String`

Reason for invalid value.

#### value

*Required*  
Type: `String`

Value to validate.

## License

MIT © [Vladimir Starkov](https://iamstarkov.com)

[npm-url]: https://npmjs.org/package/if-empty
[npm-image]: https://img.shields.io/npm/v/if-empty.svg?style=flat-square

[travis-url]: https://travis-ci.org/iamstarkov/if-empty
[travis-image]: https://img.shields.io/travis/iamstarkov/if-empty.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/iamstarkov/if-empty
[coveralls-image]: https://img.shields.io/coveralls/iamstarkov/if-empty.svg?style=flat-square

[depstat-url]: https://david-dm.org/iamstarkov/if-empty
[depstat-image]: https://david-dm.org/iamstarkov/if-empty.svg?style=flat-square
