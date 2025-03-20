function addSubject() {
    let input = document.getElementById("subject");
    let subjectName = input.value.trim(); 
    if (!subjectName) return alert("Tên môn học không được để trống!");

    let listItem = document.createElement("li");
    listItem.textContent = subjectName; 
    document.getElementById("subjectList").appendChild(listItem);
    input.value = "";
}