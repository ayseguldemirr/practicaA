document.addEventListener('DOMContentLoaded', function () {
    const projectName = document.getElementById('project-name');
    const projectDescription = document.getElementById('project-description');
    const projectCategory = document.getElementById('project-category');
    const projectDeadline = document.getElementById('project-deadline');
    const projectProgress = document.getElementById('project-progress');
    const projectStatus = document.getElementById('project-status');
    const projectImage = document.getElementById('project-image');
    const imageUpload = document.getElementById('image-upload');
    const markCompleteButton = document.getElementById('mark-complete-button');
    const backButton = document.getElementById('back-button');
    const mainMenuButton = document.getElementById('main-menu-button');

    const projects = JSON.parse(localStorage.getItem('projects'));
    const currentProjectIndex = localStorage.getItem('currentProjectIndex');

    const project = projects[currentProjectIndex];

    projectName.textContent = `Nume: ${project.name}`;
    projectDescription.textContent = `Descriere: ${project.description}`;
    projectCategory.textContent = `Categorie: ${project.category}`;
    projectDeadline.textContent = `Termen limită: ${project.deadline}`;
    projectProgress.textContent = `Progres: ${project.progress}%`;
    projectStatus.textContent = `Stare: ${project.completed ? 'Finalizat' : 'În Progres'}`;
    projectImage.src = project.image || '';

    imageUpload.addEventListener('change', function () {
        const file = imageUpload.files[0];
        const reader = new FileReader();
        reader.onload = function (e) {
            project.image = e.target.result;
            projectImage.src = project.image;
            localStorage.setItem('projects', JSON.stringify(projects));
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    });

    markCompleteButton.addEventListener('click', function () {
        projects[currentProjectIndex].completed = true;
        localStorage.setItem('projects', JSON.stringify(projects));
        projectStatus.textContent = `Stare: Finalizat`;
    });

    backButton.addEventListener('click', function () {
        window.history.back();
    });

    mainMenuButton.addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
