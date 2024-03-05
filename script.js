const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const elements = document.querySelectorAll('.hide');

elements.forEach((element) => myObserver.observe(element));

const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

function scrollToSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href);
  const nav = document.querySelector('.nav-logo-and-btn');

  const sectionTopPosition = section.getBoundingClientRect().top;
  const navHeight = nav.getBoundingClientRect().height;

  window.scroll({
    top: window.scrollY + sectionTopPosition - navHeight,
    behavior: 'smooth',
  });

  if (navbarCollapse.classList.contains('show')) {
    navbarToggler.click();
  }
}

linksInternos.forEach((link) => {
  link.addEventListener('click', scrollToSection);
});
