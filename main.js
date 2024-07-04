document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    const errorText = document.getElementById('error-message');
    const loginButton = document.getElementById('login-button');
    const mainScreen = document.getElementById('main-screen');
    const projectsList = document.getElementById('projects-list');
    const backButton = document.getElementById('back-button');

    let loggedIn = false;

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = usernameField.value.trim();
        const password = passwordField.value.trim();

        // Dummy login validation
        if (username === 'demo' && password === '123') { // Giriş bilgileri geçici olarak belirlendi
            loggedIn = true;
            errorText.textContent = '';
            showMainScreen();
        } else {
            errorText.textContent = 'Invalid username or password';
        }
    });

    backButton.addEventListener('click', function () {
        showLoginScreen();
    });

    function showLoginScreen() {
        mainScreen.classList.remove('active');
        loginForm.reset();
        loggedIn = false;
    }

    function showMainScreen() {
        mainScreen.classList.add('active');
        updateProjectsList(); // Projelerin listelendiği fonksiyon
    }

    function updateProjectsList() {
        // Proje listesini güncelleme işlevi buraya eklenecek
        const projects = ['Project 1', 'Project 2', 'Project 3']; // Örnek proje listesi
        projectsList.innerHTML = '';
        projects.forEach(function (project) {
            const li = document.createElement('li');
            li.textContent = project;
            projectsList.appendChild(li);
        });
    }
});
