async function newFormHandler(event) {
    event.preventDefault();
    const new_comment = document.querySelector('#new_comment').value;
    // Send fetch request to add a new comment
    const response = await fetch(`/comments`, {
      method: 'POST',
      body: JSON.stringify({
        new_comment
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the dish is added, the 'all' template will be rerendered
    if (response.ok) {
      document.location.replace('/images');
    } else {
      alert('Failed to add comment');
    }
  }
  
  document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
    