'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden'); // je rajoute la classe hidden a modal et overlay
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (
  let i = 0;
  i < btnsOpenModal.length;
  i++ //quand le timer devient false sa s'arette
)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal); //si le clique arrive fait appel a cette fonction
overlay.addEventListener('click', closeModal); // on pourrait ecrire la fonction directement aussi

document.addEventListener('keydown', function (e) {
  // on ecoute partout sur la page avec document
  //keydown c'est quand une touche est pressee
  // le parametre e pour la fonction c'est pour pouvoir ecouter l'evenet

  // console.log(e.key); (on ecoute le keyboard event qui est une sorte d'objet)

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    //comme e est un objet on accede a la key presse pour vour que c'est bien escape
    // et on verifie que .modal n'a pas la classe hidden actuellement

    closeModal();
  }
});
