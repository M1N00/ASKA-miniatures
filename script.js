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
    window.location.href = 'Pages/Apropos/Apropos.html';
    
});

const ProductButton1 = document.getElementById('ProduitVoirPlus1');
const ProductButton2 = document.getElementById('ProduitVoirPlus2');
const ProductButton3 = document.getElementById('ProduitVoirPlus3');
ProductButton1.addEventListener('click', () => {
    window.location.href = 'Pages/Produit/Produit.html';
    
});

ProductButton2.addEventListener('click', () => {
    window.location.href = 'Pages/Produit/Produit.html';
    
});
ProductButton3.addEventListener('click', () => {
    window.location.href = 'Pages/Produit/Produit.html';
    
});

