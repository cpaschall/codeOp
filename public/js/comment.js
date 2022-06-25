
async function commentFormHandler(event) {
  event.preventDefault();

  const comment_data = document.querySelector('textarea[name="comment-body"]').value.trim();
  const project_id = document.querySelector('#project_id_hidden').value.trim();

  if (comment_data) {
      const response = await fetch('/api/comments', {
          method: 'POST',
          body: JSON.stringify({
              comment_data,
              project_id
          }),
          headers: {
              'Content-Type': 'application/json'
          }
      });

      if (response.ok) {
        console.log(comment_data);
          document.location.reload();
      } else {
          alert(response.statusText);
      }
  }
}

$('.comment-form').on('submit', commentFormHandler);
