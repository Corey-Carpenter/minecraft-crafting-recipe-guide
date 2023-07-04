async function newFormHandler(event) {
    event.preventDefault();
    const new_comment = document.querySelector('#new_comment').value;
    //const recipe_image = event.target.closest('img');
    //const image_id = recipe_image.getAttribute('id');
    //console.log(image_id);
    // Send fetch request to add a new comment
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        text: new_comment
        //image_id: image_id
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    //if the comment is added, the 'images' template will be rerendered
    if (response.ok) {
      alert("Comment successfully created");
      document.location.replace('/api/comments');
    } else {
      alert('Failed to add comment');
    }
};
  
const form = document.querySelector('#new-comment-form')

form.addEventListener('submit', newFormHandler);

  /*
  if (new_comment === "" || null) {
        alert("Comment can't be blank");
    }

  

    
  */
    