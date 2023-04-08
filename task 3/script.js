const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const pendingTasksList = document.getElementById("pending-tasks");
const completeTasksList = document.getElementById("complete-tasks");

addBtn.addEventListener("click", () => {
  const task = taskInput.value;
  if (task !== "") {
    const li = document.createElement("li");
    li.textContent = task;
    li.addEventListener("click", () => {
      if (li.classList.contains("completed")) {
        li.classList.remove("completed");
        pendingTasksList.appendChild(li);
      } else {
        li.classList.add("completed");
        completeTasksList.appendChild(li);
      }
    });
    pendingTasksList.appendChild(li);
    taskInput.value = "";
  }
});