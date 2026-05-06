
    // Contact Form Validation
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("Name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const status = document.getElementById("formStatus");

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
      }

      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!email.match(emailPattern)) {
        status.textContent = "Enter a valid email address.";
        status.style.color = "red";
        return;
      }

      status.textContent = "contact Form submitted successfully!";
      status.style.color = "green";
      document.getElementById("contactForm").reset();
    });

    // To-Do List Functionality
    document.getElementById("addBtn").addEventListener("click", function () {
      const taskInput = document.getElementById("taskInput");
      const taskText = taskInput.value.trim();

      if (taskText === "") {
        alert("Please enter a task!");
        return;
      }

      const li = document.createElement("li");
      li.textContent = taskText;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "x";
      deleteBtn.className = "deleteBtn";
      deleteBtn.onclick = () => li.remove();

      li.appendChild(deleteBtn);
      document.getElementById("taskList").appendChild(li);

      taskInput.value = ""; // Clear input field
    });