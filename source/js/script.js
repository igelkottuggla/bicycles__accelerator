const header = document.querySelector('.header');
const openBtn = document.querySelector('.header__button');
const headerNavLinks = document.querySelectorAll('.nav__link');
const hero = document.querySelector('.hero');

const gap = 100;


if (header) {
  header.classList.remove('header--no-js');
  hero.classList.remove('hero--no-js');

  openBtn.addEventListener('click', () => {
    header.classList.toggle('header--open');
  });

  headerNavLinks.forEach((link) => {
    link.addEventListener('click', () =>
      header.classList.remove('header--open')
    );
  });
}

if (headerNavLinks) {
  headerNavLinks.forEach((link) => {
    link.addEventListener('click', (scrollEvent) => {
      scrollEvent.preventDefault();
      const id = scrollEvent.currentTarget.getAttribute('href').slice(1);
      const element = document.getElementById(id);
      let position = element.offsetTop - gap;

      window.scrollTo({
        left: 0,
        top: position,
        behavior: 'smooth',
      });
    });
  });
}

const video = document.querySelector('.video__content');

if (video) {
  const playBtn = document.querySelector('.video__play');

  const toggleVideoStatus = () => {
    if (video.paused) {
      video.play();
      playBtn.classList.add('video__button--active');
    } else {
      video.pause();
      playBtn.classList.remove('video__button--active');
    }
  };

  playBtn.addEventListener('click', toggleVideoStatus);
}

const form = document.querySelector('.hero__form');

if (form) {

  const submitBtn = document.querySelector('.hero__form button');

  const validatePhoneNumber = (inputStr) => {
    const regExp =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    return regExp.test(inputStr);
  };

  const validateName = (inputStr) => {
    const regExp = /^[а-яё]+$/;
    return regExp.test(inputStr);
  };

  const validateForm = (event) => {
    const phone = document.getElementById('tel').value;
    if (!validatePhoneNumber(phone)) {
      document.getElementById('error').classList.remove('hidden');
    } else {
      document.getElementById('error').classList.add('hidden');
    }

    const name = document.getElementById('name').value;
    if (!validateName(name)) {
      document.getElementById('error').classList.remove('hidden');
    } else {
      document.getElementById('error').classList.add('hidden');
    }

    event.preventDefault();
  };

  form.addEventListener('submit', () => {
    validateForm();
  });

  submitBtn.addEventListener('click', () => {
    localStorage.setItem('tel', document.getElementById('tel').value);
    localStorage.setItem('name', document.getElementById('name').value);
  });
}
