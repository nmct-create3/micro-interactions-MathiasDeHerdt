function handleFloatingLabel() {
  console.log('Ik kom in handleFloatingLabel');
}

const handlePasswordSwitcher = function () {
  const passwordInput = document.querySelector('.js-password-input');
  const passwordToggle = document.querySelector('.js-password-toggle');

  console.log('Ik zit in handlePasswordSwitcher');

  // kan ook op deze manier met een komma
  // const passwordInput = document.querySelector('.js-password-input'),
  // passwordToggle = document.querySelector('.js-password-toggle');

  // simpele controle
  if (!passwordInput || !passwordToggle) {
    console.error('De klasses werden niet gevonden', passwordInput, passwordToggle);
    return;
  }

  // kijk of er geklikt wordt op de checkbox
  passwordToggle.addEventListener('change', function () {
    // als er geklikt wordt, veranderen we het type van input password naar text
    if (passwordInput.type == 'password') {
      console.log('text');
      passwordInput.type = 'text';
    } else {
      console.log('password');
      passwordInput.type = 'password';
    }
  });
};

const handleLoginValidation = function () {
  console.log('Ik kom in de handleLoginValidation');
  let email = {
    field: null,
    errorMessage: null,
    input: null,

  },




  email.field = document.querySelector('.js-email-field'); // . = class
  email.errorMessage = document.querySelector('.js-email-error-mesage');
  email.input = document.querySelector('.js-email-input');
};

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  handleFloatingLabel();
  handlePasswordSwitcher();
  handleLoginValidation();
});
