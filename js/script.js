let current_id = 0;

const note = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");
const listList = document.getElementById("list");
let deleteBtns = document.querySelectorAll(".delete");

saveBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const doneBtn = document.createElement("button");
    const noteText = document.createTextNode(note.value);
    const buttonDiv = document.createElement("div");
    
    li.id = `item${current_id}`
    current_id++;
    
    deleteBtn.innerText = "Delete";
    deleteBtn.value = "Delete";
    deleteBtn.setAttribute("class", "delete btn");
    deleteBtn.setAttribute("onclick", "deleteItem()");
    console.log(deleteBtn);

    doneBtn.innerText = "Done";
    doneBtn.value = "Done";
    doneBtn.setAttribute("class", "done btn")

    if (note.value) {
        li.append(noteText);
        buttonDiv.append(deleteBtn);
        buttonDiv.append(doneBtn);
        li.append(buttonDiv);
        listList.append(li);
        deleteBtns = document.querySelectorAll(".delete");

        deleteBtns.forEach((item) => {
            item.addEventListener("click", (e) => {
                console.log(e.target);
            })
        })
    }
       
    // deleteBtns.forEach((btn) => {
    //     btn.addEventListener("click", (e) => {
    //         const currentBtnId = e.target.parentElement.parentElement.id;
    //         if (currentBtnId) {
    //             console.log(currentBtnId)
    //             document.getElementById(currentBtnId).remove();
    //             deleteBtns = document.querySelectorAll(".delete");
    //             console.log(deleteBtns)
    //         }
    //     })
    // })
});





// console.log(document.getElementById("item2").previousElementSibling.firstElementChild.innerText)
