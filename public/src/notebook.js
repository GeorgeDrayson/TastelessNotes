function Notebook() {
  this._notes = []
}

Notebook.prototype.add = function(note) {
  this._notes.push(note)
}

Notebook.prototype.all = function() {
  return this._notes
}

Notebook.prototype.delete = function (index) {
  this._notes.splice(index, 1);
}