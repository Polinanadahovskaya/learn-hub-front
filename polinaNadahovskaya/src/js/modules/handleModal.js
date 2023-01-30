const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsCloseModal = document.querySelectorAll('.close-modal');
const btnsOpenModal = document.querySelectorAll('.open-modal');

const openModal = (e) => {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = (e) => {
  e.preventDefault();
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const handleModal = () => {
  for (let i = 0; i < btnsOpenModal.length; i += 1)
    btnsOpenModal[i].addEventListener('click', openModal);

  for (let i = 0; i < btnsCloseModal.length; i += 1)
    btnsCloseModal[i].addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

export default handleModal;
