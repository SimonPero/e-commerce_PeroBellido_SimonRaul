const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "dou@example.com" && password === "password123") {
        localStorage.setItem("session", email);
        window.location.href = "./home.html";
    } else {
        alert("Credenciales incorrectas");
    }
});