function changeTheme() {
    const html = document.documentElement;
    const themeIcon = document.getElementById('themeIcon');
  
    if (html.getAttribute('data-bs-theme') === 'light') {
      html.setAttribute('data-bs-theme', 'dark');
      themeIcon.classList.replace('bi-moon-fill', 'bi-sun-fill');
    } else {
      html.setAttribute('data-bs-theme', 'light');
      themeIcon.classList.replace('bi-sun-fill', 'bi-moon-fill');
    }
  }