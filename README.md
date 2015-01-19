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

> Tape test (node test/g5-knockout-test.js)

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

###Flow

model -> EventTower <- viewModel


###TODO

* EventTower / Communication
* Write additional tests
* Cleanup
* Additional docs
* Medium writeup
* Etc...

