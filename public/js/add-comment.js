async function newFormHandler(event) {
    event.preventDefault();
    const new_comment = document.querySelector('#new_comment').value;
    // Send fetch request to add a new comment
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        text: new_comment
        //to be created still upon authentication user:
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added, the 'images' template will be rerendered
    if (response.ok) {
      alert("Comment successfully created");
      document.location.replace('/images');
    } else {
      alert('Failed to add comment');
    }
  };
  
  document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);

  /*
  if (new_comment === "" || null) {
        alert("Comment can't be blank");
    }
  */
    