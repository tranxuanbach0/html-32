function addsubject() {
    let input = document.getElementById("subject");
    let subjectname = input.value.trim(); 
    if (!subjectname) return alert("Tên môn học không được để trống!");
    let listitem = document.createElement("li");
    listitem.textContent = subjectname; 
    document.getElementById("subjectlist").appendChild(listitem);
}