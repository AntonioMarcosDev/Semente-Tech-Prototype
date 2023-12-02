function showFunctionality(functionality) {
    // Esconde todas as seções
    document.getElementById('dashboard').style.display = 'none';
    document.getElementById('water').style.display = 'none';
    document.getElementById('energy').style.display = 'none';
    document.getElementById('reports').style.display = 'none';

    // Mostra a seção correspondente à funcionalidade clicada
    document.getElementById(functionality).style.display = 'block';

    let navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('selected');
    }

    // Mostra a seção correspondente à funcionalidade clicada
    document.getElementById(functionality).style.display = 'block';

    // Adiciona a classe 'selected' ao link da funcionalidade clicada
    document.getElementById(functionality + '-link').classList.add('selected');
}

function toggleMenu() {
    let navLinks = document.querySelectorAll('nav a');
    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.toggle('show');
    }
}