const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");

    if (email === "dou@example.com" && password === "password123") {
        localStorage.setItem("session", email);
        window.location.href = "./home.html";
    } else {
        Toastify({
            text: "Credenciales incorrectas",
            className: "info",
            style: {
                background: "linear-gradient(to right, #ff5f6d, #ffc371)"
            }
        }).showToast();
    }
});