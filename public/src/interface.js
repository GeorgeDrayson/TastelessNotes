var notebook = new Notebook();

function addNote () {
    console.log(notebook.all());
    var body = getFormInput();
    notebook.add(new Note(body));
    clearTextBox();
    drawList();
}

function getFormInput () {
    return document.getElementById("note_input").value;
}

function drawList() {
  emptyList();

  var allNotes = notebook.all();
  for(i=0; i<allNotes.length; i++ ) {
    var text = allNotes[i].abbrBody();
    var noteId = `note_${i}`;
    var newListElement = document.createElement("li");
    var newContent = document.createTextNode(text);
    newListElement.id = noteId;
    newListElement.appendChild(newContent);
    document.getElementById("notes_list").appendChild(newListElement)
    document.getElementById(noteId).onclick = function() {showBigNote(this.id)};
  }
}

function emptyList() {
  var list = document.getElementById("notes_list");
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  };
};

function showBigNote(noteId) {
  console.log(noteId)
  var bigNote = document.getElementById('big_note')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNote.style.display = "block";
  formDiv.style.display = "none";
  listDiv.style.display = "none";
  setBigNoteText(noteId);
};

function showFormDiv() {
  console.log("showformdiv")
  var bigNote = document.getElementById('big_note')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNote.style.display = "none";
  formDiv.style.display = "block";
  listDiv.style.display = "block";
};

function clearTextBox() {
  document.getElementById('note_input').value = '';
};

function setBigNoteText(noteId) {
  var i = parseInt(noteId.split("_")[1]);
  var text = notebook.all()[i].getBody();
  document.getElementById("note_body_text").innerHTML = text;
}
