#g5-knockout.js

Knockout/Browserify base app

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
npm run beefy
```

###Test

> Tape test (node test/g5-knockout-test.js)

```
npm test
```

###Build

> Minify and concatenate JS

```
npm run build-js
```

###Watchify

```
npm run watch-js
```

###Flow

model -> EventTower <- viewModel


###TODO

* EventTower / Communication
* Write additional tests
* Cleanup
* Etc...

