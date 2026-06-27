let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function addTask() {
  const input = document.getElementById("taskInput");
  if (!input.value.trim()) return alert("Task cannot be empty!");

  tasks.push({ id: Date.now(), name: input.value.trim() });
  localStorage.setItem("tasks", JSON.stringify(tasks));
  input.value = "";
  displayTasks();
}

function displayTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach(t => {
    list.innerHTML += `
      <li>
        <span class="task-name">${t.name}</span>
        <span class="task-buttons">
          <button class="edit-btn" onclick="editTask(${t.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTask(${t.id})">Delete</button>
        </span>
      </li>`;
  });
}

function editTask(id) {
  const task = tasks.find(t => t.id === id);
  const newName = prompt("Edit task:", task.name);
  if (newName && newName.trim() !== "") {
    task.name = newName.trim();
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
  }
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks();
}

function searchTasks() {
  const query = document.getElementById("searchBox").value.toLowerCase();
  document.querySelectorAll("#taskList li").forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(query) ? "" : "none";
  });
}

displayTasks();