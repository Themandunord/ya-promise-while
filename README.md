# Promise While

While loops for asynchronous javascript

## Usage

```javascript

import promiseWhile from 'ya-promise-while';

let i = 0;

promiseWhile(() => i < 3, () => new Promise(resolve, reject) {
  if (Math.random() > 0.5) reject('oops');

  setTimeout(() => resolve(i++), 1);
}).then(...).catch(...);

```
