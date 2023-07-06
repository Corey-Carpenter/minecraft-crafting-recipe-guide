async function newFormHandler(event) {
    event.preventDefault();
    const newUsername = document.querySelector('#username').value;
    const newPassword = document.querySelector('#password').value;
    const response = await fetch(`/api/users/signup`, {
        method: 'POST',
        body: JSON.stringify({
          username: newUsername,
          password: newPassword
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        alert("User successfully created");
        location.reload();
      } else {
        alert('Failed to add User');
      }
};
  
const form = document.querySelector('#new-user-form')

form.addEventListener('submit', newFormHandler);


    