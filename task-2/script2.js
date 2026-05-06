
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    const status = document.getElementById('formStatus');

    if (name && email && phone) {
        console.log("Contact Form Data:");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);

        status.textContent = "Form submitted successfully!";
        status.style.color = "green";

        document.getElementById('contactForm').reset();
    } else {
        status.textContent = "Please fill out all fields.";
        status.style.color = "red";
    }
});

// To-Do List Functionality
document.getElementById('addBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    const todoList = document.getElementById('todoList');

    if (task !== "") {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "❌";
        deleteBtn.addEventListener('click', function () {
            todoList.removeChild(li);
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        taskInput.value = ""; // Clear input
    } else {
        alert("Please enter a task!");
    }
});
