function Notebook() {
  this._notes = []
}

Notebook.prototype.add = function(note) {
  this._notes.push(note)
}

Notebook.prototype.all = function() {
  return this._notes
}

