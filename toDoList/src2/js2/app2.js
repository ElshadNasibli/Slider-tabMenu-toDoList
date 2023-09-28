document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
                ${taskText}
                <button class="delete">Delete</button>
            `;
            taskList.appendChild(li);
            taskInput.value = "";
        }
    }

    function deleteTask(e) {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    }
    addTaskButton.addEventListener("click", addTask);
    taskList.addEventListener("click", deleteTask);

    taskInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            addTask();
        }
    });
});
