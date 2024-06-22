document.getElementById("todoInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTodo();
    }
});

function addTodo() {
    const todoInput = document.getElementById("todoInput");
    const todoText = todoInput.value.trim();

    if (todoText === "") {
        alert("스터디 계획을 입력하세요.");
        return;
    }

    const todoList = document.querySelector(".study-todolist table"); // querySelector 사용
    const todoItem = document.createElement("tr");
    todoItem.innerHTML = `<td id="todo-item">${todoText}</td><td id="btn"><button onclick="completeTodo()">완료</button></td>`;
    todoList.appendChild(todoItem);

    todoInput.value = "";
}

function completeTodo() {
    const completedList = document.querySelector(".study-donelist table"); // querySelector 사용
    const completedItem = event.target.parentNode.parentNode; // 이벤트가 발생한 요소의 부모의 부모인 <tr> 요소를 선택
    completedItem.classList.add("completed"); // 완료 스타일 클래스 추가
    completedItem.lastElementChild.innerHTML = '<button onclick="deletTodo()">삭제</button>'; // 버튼 삭제
    completedList.appendChild(completedItem);

    // 이하 removeEventListener 부분은 삭제됨
}

function deletTodo() {
    const deletItem = event.target.parentNode.parentNode; // 이벤트가 발생한 요소의 부모의 부모인 <tr> 요소를 선택
    deletItem.remove(); // 선택된 요소를 삭제
}