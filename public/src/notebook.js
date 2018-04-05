function Notebook() {
  this._notes = []
}

Notebook.prototype.add = function(note) {
  this._notes.push(note)
}

Notebook.prototype.all = function() {
  return this._notes
}

Notebook.prototype.addToList = function() {
  var newListElement = document.createElement("li");
  var newContent = document.createTextNode(
    this._notes[this._notes.length-1].abbrBody())
  newListElement.appendChild(newContent);
  document.getElementById("notes_list").appendChild(newListElement)
}

Notebook.prototype.addNote = function(note) {
  this.add(note)
  this.addToList()
}
