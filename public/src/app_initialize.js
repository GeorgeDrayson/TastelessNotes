var notebook = new Notebook();

function addToList () {
    var newListElement = document.createElement("li");
    var newContent = document.createTextNode(
        notebook._notes[notebook._notes.length - 1].abbrBody())
    newListElement.appendChild(newContent);
    document.getElementById("notes_list").appendChild(newListElement)
}

function addNote () {
    var body = getFormInput()
    notebook.add(new Note(body))
    addToList()
}

function getFormInput () {
    return document.getElementById("note_input").value
}