document.addEventListener("DOMContentLoaded", function () {
  const burger = document.getElementById('burger');
  const navLinks = document.getElementById('nav-links');

  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
});

function handleFormSubmit(formSelector) {
  const form = document.querySelector(formSelector);

  if (!form) {
    console.warn(`Formulář "${formSelector}" nebyl nalezen.`);
    return;
  }

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.reset();
  });
}
document.addEventListener('DOMContentLoaded', function () {
  handleFormSubmit('#contact-form');
});