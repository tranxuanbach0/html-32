function addSubject() {
    let input = document.getElementById("subjectInput");
    let subjectName = input.value.trim();
    if (subjectName === "") {
        alert("Tên môn học không được để trống!");
        return;
}

let list = document.getElementById("subjectList");
let listItem = document.createElement("li");
listItem.textContent = subjectName;

list.appendChild(listItem);
input.value = "";
}