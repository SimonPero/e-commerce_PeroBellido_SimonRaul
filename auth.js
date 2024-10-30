const session = localStorage.getItem("session")
if (session && location.pathname === "/login.html") {
    window.location.href = "./home.html";
}

if (!session && location.pathname === "/cart.html") {
    window.location.href = "./login.html";
}