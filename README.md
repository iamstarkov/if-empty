# if-empty

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

ifEmpty('unicorns'); // unicorns
```

## API

### ifEmpty(input, [options])

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

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
