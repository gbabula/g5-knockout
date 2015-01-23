#g5-knockout.js

__Knockout/Browserify__ base app - __MVVM__ with an __event__ layer.

_g5-knockout is an app/module scaffold based on a tried and proven_

_application architecture and solid development patterns._

---

![g5-knockout flow](http://i59.tinypic.com/96xe6e.png)

---

###Setup

```
git clone https://github.com/gbabula/g5-knockout && cd g5-knockout && npm install && npm run start
```
###Options

* __container__: `Element` unique element to bind Knockout to
* __interval__: `Number` refresh rate (milliseconds)
* __i18n__: `String` localization identification (en/es)

###Module Usage

```js
var g5Knockout = require('g5-knockout').construct;

var demoApp = new g5Knockout({
    container: document.getElementById('g5-knockout-app')
});
```

###Server

> Server running on [http://localhost:9966](http://localhost:9966) with auto builds

```
npm run start-dev
```

###Test

```
npm test
```

###Build

```
npm run build
```

###Style Guide / Rules

* Style Guide - [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
* Protect against `new` - constructors can be called with or without `new`
* Maintain chainability, methods return `this`

###TODO

- [x] Fix server / watchify instance
- [ ] Consider using node server instead of simple python server
- [ ] Register package
- [ ] KO components
- [ ] Write additional tests
- [ ] Cleanup
- [ ] Additional docs
- [ ] Medium writeup

###Reference

* https://github.com/substack/browserify-handbook
* http://substack.net/task_automation_with_npm_run 
* https://github.com/chrisdickinson/beefy
* https://github.com/substack/watchify

###License

Copyright (c) 2015, Greg Babula <gbabula@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
