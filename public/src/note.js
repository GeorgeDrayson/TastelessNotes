function Note(body) {
  this._body = body
}

Note.prototype.getBody = function() {
  return this._body
}

Note.prototype.abbrBody = function() {
  return (this._body.length > 20 ? this._body.slice(0, 20) + '...' : this._body);
}
