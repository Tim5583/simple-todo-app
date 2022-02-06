let current_id = 0;

const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const listList = document.getElementById("list");
let todos = []

class Note {
    constructor(id, note, isDone) {
        this.id = id;
        this.note = note;
        this.isDone = isDone;
    }
}

saveBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const paragraph = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const buttonDiv = document.createElement("div");
    
    li.id = current_id;
    
    deleteBtn.innerText = "Delete";
    deleteBtn.value = "Delete";
    deleteBtn.setAttribute("class", "delete btn");
    deleteBtn.setAttribute("onclick", "deleteItem(this)");

    doneBtn.innerText = "Done";
    doneBtn.value = "Done";
    doneBtn.setAttribute("class", "done btn");
    doneBtn.setAttribute("onclick", "doneItem(this)");

    if (note.value) {
        noteValue = note.value;
        paragraph.innerText = noteValue;
        li.append(paragraph);
        buttonDiv.append(doneBtn);
        buttonDiv.append(deleteBtn);
        li.append(buttonDiv);
        listList.append(li);
        note.value = null;
        newTodo = new Note(current_id, noteValue, false);
        todos.push(newTodo);
        current_id++;
        localStorage.setItem("todo", JSON.stringify(todos));
        console.log(todos);
        console.log(localStorage.getItem("todo"));
    }
});


function deleteItem(e) {
    e.parentElement.parentElement.remove();
}

function doneItem(e) {
    console.log(e.parentElement.parentElement);
    e.parentElement.parentElement.firstElementChild.style.textDecoration = "line-through";
    e.parentElement.parentElement.style.opacity = "0.5";
}
