document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });
  
  ScrollReveal().reveal(".showcase");
  ScrollReveal().reveal(".news-cards", { delay: 500 });
  ScrollReveal().reveal(".cards-banner-one", { delay: 500 });
  ScrollReveal().reveal(".cards-banner-two", { delay: 500 });

  document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    const adminUsername = "admin"
    const adminPassword = "admin"

    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            // Check for admin login
            if (username === adminUsername && password === adminPassword) {
                alert("Admin login successful");
                // Redirect to admin dashboard
                window.location.href = "index.html";
            } else {
                // Check for regular user login (placeholder logic)
                if (username && password) {  // Adjust this as per actual user validation
                    alert("User login successful");
                    // Redirect to user area, e.g., home page or dashboard
                    window.location.href ="index.html";
                } else {
                    alert("Invalid username or password");
                }
            }
        });
    }

    if (signupForm) {
        signupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;

            // Basic validation for password match
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }

            // Placeholder for sign-up logic
            console.log("Signing up:", username, email);
            alert("Sign up successful");
            window.location.href = "index.html";
        });
    }
});
