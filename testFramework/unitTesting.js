(function(exports) {

  function expect(object) {
    return {
      toEqual: function(check) {
        return object === check ?
        `PASS: ${object} is equal to ${check}` :
        `FAIL: ${object} is not equal to ${check}`;
      },

      toNotEqual: function(check) {
        return object !== check ?
        `PASS: ${object} is not equal to ${check}` :
        `FAIL: ${object} is NOT not equal to ${check}...?!?!`;
      },

      toBeTrue: function() {
        return object === true ?
        `PASS: ${object} is true` :
        `FAIL: ${object} is not true`;
      },

      toNotBeTrue: function() {
        return object !== true ?
        `PASS: ${object} is not true` :
        `FAIL: ${object} is NOT not true...?!?!`;
      },

      toContain: function(content) {
        return object.includes(content) ?
        `PASS: ${object} contains ${content}` :
        `FAIL: ${object} does not contain ${content}`;
      },

      toNotContain: function(content) {
        return !object.includes(content) ?
        `PASS: ${object} does not contain ${content}` :
        `FAIL: ${object} does NOT not contain ${content}...WTF?`;
      }
    }
  }

  exports.expect = expect
})(this)
