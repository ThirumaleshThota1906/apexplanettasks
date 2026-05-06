document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", () => {
            const target = button.getAttribute("data-tab");

            // Update active class on buttons
            tabButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            // Show the corresponding tab content
            tabContents.forEach(content => {
                if (content.id === target) {
                    content.classList.add("active");
                } else {
                    content.classList.remove("active");
                }
            });
        });
    });
});



//contact form functionality

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


