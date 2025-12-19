function addTask() {
    const input = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (input.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create the List Item (li)
    const li = document.createElement('li');
    
    // Set the inner HTML
    li.innerHTML = `
        <span onclick="toggleTask(this)">${input.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    // Add to the list and clear input
    taskList.appendChild(li);
    input.value = "";
}

function toggleTask(element) {
    element.classList.toggle('completed');
}

function deleteTask(element) {
    element.parentElement.remove();
}