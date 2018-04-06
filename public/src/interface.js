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

function createTableElement(el_name, i, el_tag, el_text = null) {
  var elId = `${el_name}_${i}`;
  var elTag = document.createElement(el_tag);
  elTag.id = elId;
  elTag.innerText = el_text;
  return elTag;
}

function drawList() {
  emptyList();

  var allNotes = notebook.all();
  for(i=0; i<allNotes.length; i++ ) {
    var text = allNotes[i].abbrBody();
    var noteText = document.createTextNode(text);
    var table = document.getElementById('notes_table');

    var rowTr = createTableElement("row", i, "tr");

    var noteTd = createTableElement("note", i, "td");
    var editTd = createTableElement("edit", i, "td");
    var delTd = createTableElement("del", i, "td");

    var delBtn = createTableElement("del", i, "button", "Delete");
    var editBtn = createTableElement("edit", i, "button", "Edit");

    noteTd.appendChild(noteText);
    rowTr.appendChild(noteTd);

    editTd.appendChild(editBtn);
    rowTr.appendChild(editTd);

    delTd.appendChild(delBtn);
    rowTr.appendChild(delTd);

    table.appendChild(rowTr);

    document.getElementById(noteTd.id).onclick = function() {showBigNote(this.id)};
  }
}

function emptyList() {
  var list = document.getElementById("notes_table");
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
