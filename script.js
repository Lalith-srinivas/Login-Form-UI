const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page

    const username = document.querySelector(".username").value.trim();
    const password = document.querySelector(".password").value.trim();

    if (!username || !password) {
        alert("Please fill in both username and password.");
    } else {
        alert(`Welcome, ${username}!`);
        form.reset(); // optional: clear fields
    }
});
