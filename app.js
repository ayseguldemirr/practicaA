document.addEventListener('DOMContentLoaded', function () {
    const loginScreen = document.getElementById('login-screen');
    const mainScreen = document.getElementById('main-screen');

    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const loginError = document.getElementById('login-error');

    const projectList = document.getElementById('project-list');
    const addProjectButton = document.getElementById('add-project-button');
    const deleteCompletedButton = document.getElementById('delete-completed-button');

    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    loginButton.addEventListener('click', function () {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (username === 'DEMIR' && password === '6161') {
            loginScreen.classList.remove('active');
            mainScreen.classList.add('active');
            renderProjectList();
        } else {
            loginError.textContent = 'Credențiale de autentificare invalide';
        }
    });

    addProjectButton.addEventListener('click', function () {
        const name = prompt('Introduceți numele proiectului:');
        const description = prompt('Introduceți descrierea proiectului:');
        const category = prompt('Introduceți categoria proiectului (Rezidențial, Comercial, Industrial):');
        const deadline = prompt('Introduceți termenul limită al proiectului:');
        const progress = prompt('Introduceți progresul proiectului (%):');
        if (name && description && category && deadline && progress) {
            projects.push({ name, description, category, deadline, progress, completed: false, image: '' });
            localStorage.setItem('projects', JSON.stringify(projects));
            renderProjectList();
        }
    });

    deleteCompletedButton.addEventListener('click', function () {
        projects = projects.filter(project => !project.completed);
        localStorage.setItem('projects', JSON.stringify(projects));
        renderProjectList();
    });

    projectList.addEventListener('click', function (e) {
        if (e.target.tagName === 'LI') {
            const index = Array.from(projectList.children).indexOf(e.target);
            localStorage.setItem('currentProjectIndex', index);
            window.location.href = 'project.html';
        }
    });

    function renderProjectList() {
        projectList.innerHTML = '';
        projects.forEach((project, index) => {
            const li = document.createElement('li');
            li.textContent = `${project.name} - ${project.completed ? 'Finalizat' : 'În Progres'}`;
            projectList.appendChild(li);
        });
    }
});

