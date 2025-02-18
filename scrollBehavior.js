let prevScrollPos = window.pageYOffset;
const navBar = document.querySelector('nav.nav-bar');

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    navBar.classList.remove('nav-bar-hidden');
  } else {
    // Scrolling down
    navBar.classList.add('nav-bar-hidden');
  }

  prevScrollPos = currentScrollPos;
});
