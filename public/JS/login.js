async function newFormHandler(event) {
    event.preventDefault();
    const enteredUsername = document.querySelector('#username').value;
    const enteredPassword = document.querySelector('#password').value;
    const response = await fetch(`/api/users/login`, {
        method: 'POST',
        body: JSON.stringify({
          username: enteredUsername,
          password: enteredPassword
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert("You are now logged in!");
        document.location.replace('/');
      } else {
        alert('Login failed.');
      }
};
  
const form = document.querySelector('#login-form')

form.addEventListener('submit', newFormHandler);


    