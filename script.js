const projects = document.querySelectorAll('.project'); // Seleciona todos os projetos
const leftArrow = document.querySelector('.arrow.left'); // Seta esquerda
const rightArrow = document.querySelector('.arrow.right'); // Seta direita
let currentProject = 0; // Índice do projeto ativo

// Função para atualizar a exibição dos projetos
function updateProjects() {
    projects.forEach((project, index) => {
        if (index === currentProject) {
            project.classList.add('active');
        } else {
            project.classList.remove('active');
        }
    });
}

// Evento para a seta da esquerda
leftArrow.addEventListener('click', () => {
    currentProject = (currentProject - 1 + projects.length) % projects.length; // Volta ao último se for o primeiro
    updateProjects();
});

// Evento para a seta da direita
rightArrow.addEventListener('click', () => {
    currentProject = (currentProject + 1) % projects.length; // Vai para o primeiro se for o último
    updateProjects();
});

// Chamada inicial para mostrar o primeiro projeto
updateProjects();
