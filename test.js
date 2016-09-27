import test from 'ava';
import promiseWhile from '.';

test('loop until condition is false', async t => {
  let i = 0;
  await promiseWhile(
    // condition:
    () => i < 3,
    // action:
    () => new Promise(resolve => {
      setTimeout(() => { resolve(i++) }, 1);
    })
  );

  t.is(i, 3);
});

test('reject', async t => {
  t.throws(promiseWhile(() => true, () => new Promise((resolve, reject) => {
    reject(new Error('catch me!'));
  }), 'catch me!'));
});
