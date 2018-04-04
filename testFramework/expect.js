(function(exports) {

  function expect(object) {
    return {
      toEqual: function(check) {
        if (object !== check) {
        return `FAIL: ${object} is not equal to ${check}`;
        }
      },

      toNotEqual: function(check) {
        if (object === check) {
        return `FAIL: ${object} is NOT not equal to ${check}...?!?!`;
        }
      },

      toBeTrue: function() {
        if (object !== true) {
        return `FAIL: ${object} is not true`;
        }
      },

      toNotBeTrue: function() {
        if (object === true) {
        return `FAIL: ${object} is NOT not true...?!?!`;
        }
      },

      toContain: function(content) {
        if (!object.includes(content)) {
        return `FAIL: ${object} does not contain ${content}`;
        }
      },

      toNotContain: function(content) {
        if (object.includes(content)) {
        return `FAIL: ${object} does NOT not contain ${content}...WTF?`;
        }
      },

      toBeHtmlElement: function() {
        if (document.getElementById(object) === null) {
          return `FAIL: HTML element ${object} does not exist`
        }
      },

      toContainHtmlContent: function(text) {
        if (!document.getElementById(object).innerHTML.includes(text)) {
          return `FAIL: HTML element ${object} does not include ${text}`
        }
      }
    }
  }

  exports.expect = expect;
})(this)
