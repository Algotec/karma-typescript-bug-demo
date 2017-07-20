# karma typescript transform debugging demo

# before running make sure to both install regular and peer dependencies

```
yarn
npm run peers /// installs peer dependecies
```

to run tests in continues mode use
```
npm run tdd
```

error in console
```
karma-typescript-bundle-274043GcLMI7EwEmI.js:70497 Uncaught TypeError: (0 , _defineProperty2.default) is not a function
    at baseSetToString (karma-typescript-bundle-274043GcLMI7EwEmI.js:70497)
    at karma-typescript-bundle-274043GcLMI7EwEmI.js:7070
    at baseRest (karma-typescript-bundle-274043GcLMI7EwEmI.js:70564)
    at Object.global.wrappers.C:/Data/karma-typescript-bug-demo/node_modules/lodash-es/difference.js../_baseFlatten.js (karma-typescript-bundle-274043GcLMI7EwEmI.js:70614)
    at require (commonjs.js:17)
    at commonjs.js:18
    at Object.global.wrappers.C:/Data/karma-typescript-bug-demo/src/button.component.ts.tslib (button.component.js:24)
    at require (commonjs.js:17)
    at commonjs.js:18
    at Object.global.wrappers.C:/Data/karma-typescript-bug-demo/src/button.component.spec.ts.tslib (button.component.spec.js:5)
baseSetToString @ karma-typescript-bundle-274043GcLMI7EwEmI.js:70497
(anonymous) @ karma-typescript-bundle-274043GcLMI7EwEmI.js:7070
baseRest @ karma-typescript-bundle-274043GcLMI7EwEmI.js:70564
global.wrappers.C:/Data/karma-typescript-bug-demo/node_modules/lodash-es/difference.js../_baseFlatten.js @ karma-typescript-bundle-274043GcLMI7EwEmI.js:70614
require @ commonjs.js:17
(anonymous) @ commonjs.js:18
global.wrappers.C:/Data/karma-typescript-bug-demo/src/button.component.ts.tslib @ button.component.js:24
require @ commonjs.js:17
(anonymous) @ commonjs.js:18
global.wrappers.C:/Data/karma-typescript-bug-demo/src/button.component.spec.ts.tslib @ button.component.spec.js:5
require @ commonjs.js:17
(anonymous) @ commonjs.js:32
(anonymous) @ commonjs.js:31
(anonymous) @ commonjs.js:34
debug.js:6 Skipped 0 tests 
```