var notebook = new Notebook();

function addNote () {
    var body = getFormInput("note_input");
    if (body !== "") {
      notebook.add(new Note(body));
      clearTextBox('note_input');
      drawList();
    }
}

function getFormInput (id) {
    return document.getElementById(id).value;
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
    document.getElementById(delBtn.id).onclick = function() {deleteNote(this.id)};
    document.getElementById(editBtn.id).onclick = function() {editNote(this.id)};
  }
}

function emptyList() {
  var list = document.getElementById("notes_table");
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  };
};

function showBigNote(noteId) {
  var bigNote = document.getElementById('big_note')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNote.style.display = "block";
  formDiv.style.display = "none";
  listDiv.style.display = "none";
  setBigNoteText(noteId);
};

function showFormDiv() {
  var bigNote = document.getElementById('big_note')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNote.style.display = "none";
  formDiv.style.display = "block";
  listDiv.style.display = "block";
};

function clearTextBox(id) {
  document.getElementById(id).value = '';
};

function setBigNoteText(noteId) {
  var i = parseInt(noteId.split("_")[1]);
  var text = notebook.all()[i].getBody();
  document.getElementById("note_body_text").innerHTML = text;
}

function deleteNote(clicked_id) {
  var i = parseInt(clicked_id.split("_")[1]);
  notebook.delete(i);
  drawList();
}

function editNote(clicked_id) {
  var i = clicked_id.split("_")[1];
  document.getElementById('form_div').style.display = "none";
  document.getElementById('list_div').style.display = "none";
  document.getElementById('note_edit_div').style.display = "block";
  document.getElementById('submit_note_edit').value = i;
}

function submitNoteEdit() {
  var i = parseInt(document.getElementById('submit_note_edit').value);
  var body = getFormInput("note_edit_text");
  if (body !== "") {
    notebook.all()[i].editBody(body);
    clearTextBox("note_edit_text");
    drawList();
  }
  document.getElementById('form_div').style.display = "block";
  document.getElementById('list_div').style.display = "block";
  document.getElementById('note_edit_div').style.display = "none";
}
