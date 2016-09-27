'use strict';

module.exports = function promiseWhile (condition, action) {
  return new Promise(function (resolve, reject) {
    var loop = function () {
      if (!condition()) {
        return resolve();
      }
      return Promise.resolve(action()).then(loop).catch(reject);
    };

    process.nextTick(loop);
  });
};
