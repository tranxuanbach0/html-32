let todoList = [
];
function renderTodo() {
    let listTodo = document.getElementById("myUL");
    listTodo.innerHTML = "";
    todoList.forEach((item, index) => {
        listTodo.innerHTML += `<li>${item} <span class="close" onclick="deleteTodo(${index})">x</span></li>`;
    });
}
function addTodo() {
    let inputElement = document.getElementById("myInput");
    let inputValue = inputElement.value.trim();
    if (!inputValue) return;
    todoList.push(inputValue);
    inputElement.value = "";
    renderTodo();
}
function deleteTodo(index) {
    if (confirm("Bạn có chắc chắn muốn xóa nhiệm vụ này không?")) {
        todoList.splice(index, 1);
        renderTodo();
    }
}