(function(exports) {

  function it(string, callback) {
    if (callback()) {
      return `${string}\n ${callback()}`;
    } else {
      return `${string}`;
    }
  }

  exports.it = it;
})(this)