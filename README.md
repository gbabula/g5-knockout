#g5-knockout.js

Knockout/Browserify base app - MVVM with an event layer that handles communication between the model and viewModel.

---

Style Guide [https://github.com/airbnb/javascript](https://github.com/airbnb/javascript)

---

###Usage

```js
var g5Knockout = require('g5-knockout').construct;

var demoApp = new g5Knockout({
    container: document.getElementById('g5-knockout-app')
});
```

###Server

> Beefy server running on http://localhost:9966

```
npm run start
```

###Test

> Tape test (all files in test/ directory)

```
npm test
```

###Build

> Bundles CSS & JS

```
npm run build
```

###Watch

> Watches and rebuilds CSS & JS

```
npm run watch
```

###TODO

* EventTower / Communication
* Write additional tests
* Cleanup
* Additional docs
* Medium writeup
* Etc...

###Reference

* https://github.com/substack/browserify-handbook
* http://substack.net/task_automation_with_npm_run 

###License

Copyright (c) Greg Babula <gbabula@gmail.com>

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
