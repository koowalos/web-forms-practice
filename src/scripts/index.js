import $ from 'jquery';
import '../styles/index.scss';

let form = document.getElementById('user-form');

form.addEventListener('submit', (event) => {
  let user = form.elements['user'];
  let city = form.elements['city'];
  let email = form.elements['email'];

  let posting = {
    user: user.value,
    city: city.value,
    email: email.value,
  };

  let promise = $.post(
    'https://5ed646b8c2ca2300162c62c8.mockapi.io/John',
    posting
  );

  let userError = document.getElementById('user-error');
  let cityError = document.getElementById('city-error');
  let emailError = document.getElementById('email-error');

  userError.textContent = 'Invalid entry';
  userError.style.color = 'red';
  user.style.borderColor = 'red';

  cityError.textContent = 'Invalid entry';
  cityError.style.color = 'red';
  city.style.borderColor = 'red';

  emailError.textContent = 'Invalid entry';
  emailError.style.color = 'red';
  email.style.borderColor = 'red';

  promise.then(
    (data) => console.log('success :', data),
    (error) => console.log('error: ', error)
  );
  event.preventDefault();
  form.reset();
});
