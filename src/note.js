function Note(body) {
  this._body = body
}

Note.prototype.getBody = function() {
  return this._body
}

Note.prototype.abbrBody = function(n) {
  if (this._body.length > 20) {
    return this._body.substring(0,20)+'...';
  } else {
    return this._body;
  }
}
