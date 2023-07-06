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
    if (new_comment === "" || null) {
        alert("Comment can't be blank");
    }
    if (response.ok) {
      alert("Comment successfully created");
      document.location.replace('/api/comments');
    } else {
      alert('Failed to add comment');
    }
<<<<<<< HEAD
  }
  
  document.querySelector('.new-comment-form').addEventListener('submit', newFormHandler);
=======
};
  
const form = document.querySelector('#new-comment-form')

form.addEventListener('submit', newFormHandler);
>>>>>>> af48a798489b58e1a74cd90bcd34ae16f57d750c
    