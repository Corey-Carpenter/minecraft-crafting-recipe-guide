async function deleteHandler(event) {
    const deleteButton = event.target;
    const commentId = deleteButton.parentElement.getAttribute('data-comment-id');
    event.stopPropagation();
    // Send fetch request to delete comment
    const response = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    });
    //if the comment is deleted, the 'comments' template will be rerendered
    if (response.ok) {
      alert("Comment successfully deleted");
      console.log(response);
      document.location.replace('/api/comments');
    } else {
      alert('Failed to delete comment');
    }
};

var deleteElements = document.querySelectorAll('.button');

function eventHandler(element) {
      element.addEventListener('click', deleteHandler);
  };

deleteElements.forEach(eventHandler);