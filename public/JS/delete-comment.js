async function deleteHandler(event) {
    event.preventDefault();
    let deleteButton = event.target;
    while(!deleteButton.getAttribute("id")) {
      deleteButton = deleteButton.parentElement;
    }
    const commentId = deleteButton.id;
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    });
    if (response.ok) {
      alert("Comment successfully deleted");
      location.reload();
    } else {
      alert('Failed to delete comment');
    }
};

var deleteButtons = document.querySelectorAll('.button');

function eventHandler(button) {
      button.addEventListener('click', deleteHandler);
  };

deleteButtons.forEach(eventHandler);