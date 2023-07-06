async function newFormHandler(event) {
    event.preventDefault();
    const new_comment = document.querySelector('#new_comment').value;
    const imageId = parseInt(event.target.parentElement.getAttribute("data-image-id"));
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        text: new_comment,
        image_id: imageId
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      alert("Comment successfully created");
      location.reload();
    } else {
      alert('Failed to add comment');
    }
};
  
const form = document.querySelector('#new-comment-form')

form.addEventListener('submit', newFormHandler);
    