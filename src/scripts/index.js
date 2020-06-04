import $ from 'jquery';

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

  promise.then(
    (data) => console.log('success :', data),
    (error) => console.log('error: ', error)
  );
  event.preventDefault();
  form.reset();
});
