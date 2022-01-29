let current_id = 0;

const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const listList = document.getElementById("list");


saveBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const paragraph = document.createElement("p");
    const deleteBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const buttonDiv = document.createElement("div");
    
    li.id = `item${current_id}`
    current_id++;
    
    deleteBtn.innerText = "Delete";
    deleteBtn.value = "Delete";
    deleteBtn.setAttribute("class", "delete btn");
    deleteBtn.setAttribute("onclick", "deleteItem(this)");

    doneBtn.innerText = "Done";
    doneBtn.value = "Done";
    doneBtn.setAttribute("class", "done btn");
    doneBtn.setAttribute("onclick", "doneItem(this)");

    if (note.value) {
        paragraph.innerText = note.value;
        li.append(paragraph);
        buttonDiv.append(doneBtn);
        buttonDiv.append(deleteBtn);
        li.append(buttonDiv);
        listList.append(li);
        note.value = null;
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
