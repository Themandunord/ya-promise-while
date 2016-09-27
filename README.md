
# Promise While

While loops for asynchronous javascript

## Caveat:

BREAKING CHANGE in 2.0.0:

import/require `promise-while` in this way:

`const promiseWhile = require('promise-while')`

rather than the old way(1.0.0):

`const promiseWhile = require('promise-while')(Promise)`

currently use built-in `Promise` and use it only.

## Usage

````
var promiseWhile = require('promise-while')

promiseWhile(
  function() {
    return true // infinite loop
  },
  function() {
    // return Promise
  }
)
.then(function() {
  // while loop completed, conditional returned false
})
````
