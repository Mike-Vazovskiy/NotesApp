const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

let notes = document.querySelectorAll(".input-box");

function showNodes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNodes();

function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML)
}

createBtn.addEventListener("click", ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable", "true");
    img.src = "images/delete.png";
    img.className = "delete-img";
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    } else if(e.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box")
        notes.foreach(nt => {
            nt.onkeyup = function() {
                updateStorage()
            }
        })
    }
})

document.addEventListener("keypress", event => {
    if(event.key = 13) {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})