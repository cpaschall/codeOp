async function commentFormHandler(event) {
  event.preventDefault();

  const commentData = $('textarea[name="comment-body"]').val().trim();

  // const project_id = window.location.toString().split('/')[
  //     window.location.toString().split('/').length - 1
  // ];

  if (commentData) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        commentData,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      console.log("comment created");
      // document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

$(".comment-form").on("submit", commentFormHandler);
