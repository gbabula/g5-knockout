#g5-knockout.js

[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/gbabula/g5-knockout?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

__Knockout/Browserify__ base app - __MVVM__ with an __event__ layer.

_g5-knockout is an app/module scaffold based on a tried and proven_

_application architecture and solid development patterns._

[Read More](https://medium.com/@gregbabula/knockout-browserify-base-app-mvvm-with-an-event-layer-7b0996eb4d0a) :books:

---

![g5-knockout flow](http://i59.tinypic.com/96xe6e.png)

---

###Setup

> Installs dependencies, runs initial build and starts up a simple [python server](http://localhost:9966)

```
git clone https://github.com/gbabula/g5-knockout && cd g5-knockout && npm install && npm run start
```

###Server

> Server running on [http://localhost:9966](http://localhost:9966) with auto builds, [Ctrl+C] to kill server

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

###Module Usage

```js
var g5Knockout = require('g5-knockout').construct;

var demoApp = new g5Knockout({
    container: document.getElementById('g5-knockout-app')
});

demoApp.init();
```

###Options

* __container__: `Element` unique element to bind Knockout to
* __interval__: `Number` refresh rate (milliseconds)
* __i18n__: `String` localization identification (en/es)

###Methods

* __init__: creates instance, instantiates viewModel and model
* __display__: toggles container visibility based on `Boolean` param

###Style Guide / Rules

* Style Guide - [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)
* Protect against `new` - constructors can be called with or without `new`
* Maintain chainability, methods return `this`

###Notes :clipboard:

* `npm run start` will run a single build and start the server, if you want auto builds run `npm run start-dev`
* If you're having issues running the setup command, make sure you have the proper permissions setup (you can also attempt to run the commands with sudo, although that is usually discouraged)

###TODO :construction:

- [x] Refactor EventTower
- [ ] Refactor viewModel - keep observables under one data Object for a cleaner reference
- [ ] Refactor model
- [ ] Register package
- [ ] KO components implementation
- [ ] Write additional tests
- [ ] Cleanup
- [ ] Additional docs
- [ ] Live demo
- [ ] Step through code, document things that need to happen on each layer more clearly
- [ ] Define code that needs to be replaced by users more clearly
- [ ] Visual outline of code execution (simple diagram connecting code layers)
- [x] Medium writeup
- [x] Fix server / watchify instance

###Reference :link:

* [About g5-knockout](https://medium.com/@gregbabula/knockout-browserify-base-app-mvvm-with-an-event-layer-7b0996eb4d0a)
* [KnockoutJS Docs](http://knockoutjs.com/documentation/introduction.html)
* [Browserify Handbook](https://github.com/substack/browserify-handbook)
* [Task Automation with npm run](http://substack.net/task_automation_with_npm_run)
* [About Watchify](https://github.com/substack/watchify)
* [Tape Tests](https://github.com/substack/tape)
* [Simple HTTP Server](https://docs.python.org/2/library/simplehttpserver.html)

###License :shipit:

Copyright (c) 2015, Greg Babula <gbabula@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
