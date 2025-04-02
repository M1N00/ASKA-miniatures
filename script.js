//C'est le truc que Loris a demandé d'ajouter mais c'est franchement pas ouf

/*
const container = document.querySelector('.Chat_vente-container');

container.addEventListener('scroll', () => {
    if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollTo({ left: 0, behavior: 'smooth' });
    }
});

*/
const AproposButton = document.getElementById('APROPOS');

AproposButton.addEventListener('click', () => {
    window.location.href = 'Apropos.html';
});