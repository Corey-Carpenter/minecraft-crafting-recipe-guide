async function logoutHandler(event) {
    event.preventDefault();
    let logoutButton = event.target;
    while(!logoutButton.getAttribute("id")) {
      logoutButton = logoutButton.parentElement;
    }
    const response = await fetch(`/api/users/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    alert("You are now logged out.");
    location.reload();
};
  
const logoutButton = document.querySelector('#log-out');

logoutButton.addEventListener('click', logoutHandler);