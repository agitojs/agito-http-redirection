# agito-http-redirection [![NPM version][npm-img]][npm]

[![Build Status][travis-img]][travis]
[![Test Coverage][codeclimate-coverage-img]][codeclimate]
[![Code Climate][codeclimate-gpa-img]][codeclimate]
[![Dependencies Status][daviddm-dep-img]][daviddm-dep]

An [Agito][agito] plugin to perform HTTP redirections.

## Installation

```bash
npm install agito-http-redirection
```

## Getting Started

```javascript
var agito = require('agito');
var jsonLoader = require('agito-http-redirection');

agito()
  .use(httpRedirection())
  .start();
```

## Issue tracker

Please feel free to report issues and bugs or to submit patches by the
[issue tracker][issue-tracker].

## Changelog

See [`CHANGELOG.md`](CHANGELOG.md)

## Authors

See [`package.json`](package.json)

## License

See [`LICENSE`](LICENSE)

[npm]: https://www.npmjs.org/package/agito-http-redirection
[npm-img]: http://img.shields.io/npm/v/agito-http-redirection.svg?style=flat
[travis]: https://travis-ci.org/agitojs/agito-http-redirection
[travis-img]: http://img.shields.io/travis/agitojs/agito-http-redirection/master.svg?style=flat
[codeclimate]: https://codeclimate.com/github/agitojs/agito-http-redirection
[codeclimate-coverage-img]: http://img.shields.io/codeclimate/coverage/github/agitojs/agito-http-redirection.svg?style=flat
[codeclimate-gpa-img]: http://img.shields.io/codeclimate/github/agitojs/agito-http-redirection.svg?style=flat
[daviddm-dep]: https://david-dm.org/agitojs/agito-http-redirection
[daviddm-dep-img]: http://img.shields.io/david/agitojs/agito-http-redirection.svg?style=flat

[agito]: https://github.com/agitojs/agito

[issue-tracker]: https://github.com/agitojs/agito-http-redirection/issues
