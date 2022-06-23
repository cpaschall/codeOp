console.log("Project works")
const newProjHandler = async (event) => {
  event.preventDefault();
  console.log(event)

  const title = $("#post-title").val()
  const content = $("#post-content").val()
  const skills = $(".form-check-input[name='skill']:checked");


  const newArray = [];
  skills.each(index => newArray.push(skills[index].value))
  console.log(newArray);

  if (title && content ) {
    const response = await fetch(`/api/projects`, {
      method: "POST",
      body: JSON.stringify({ proj_name: title, summary: content, language: newArray}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/projectDisplay");
      console.log("project created")
    } else {
      alert("Failed to create project");
    }
  }
};
console.log($("#project-form").length)
$("#project-form").on("submit", newProjHandler)
// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute("data-id")) {
//     const id = event.target.getAttribute("data-id");

//     const response = await fetch(`/api/projects/${id}`, {
//       method: "DELETE",
//     });

//     if (response.ok) {
//       document.location.replace("/project");
//     } else {
//       alert("Failed to delete project");
//     }
//   }
// };

// document
//   .querySelector(".new-project-form")
//   .addEventListener("submit", newFormHandler);

// document
//   .querySelector(".project-list")
//   .addEventListener("click", delButtonHandler);
// (function () {
//   function newProject(event) {
//     event.preventDefault();
//     const title = $("#post-title").val();
//     const content = $("#post-content").val();

//     if (title && content) {
//       // Send a POST request to the API endpoint
//       const response = fetch("/api/projects", {
//         method: "POST",
//         body: JSON.stringify({ title, content }),
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((data) => data.json())
//         .then((response) => {
//           document.location.replace("/");
//         })
//         .catch((err) => {
//           alert("Err", err);
//         });
//     }
//   }
// })

//   $("#new-post").on("click", newProject);
// })();

// (function () {
//   function updatePost(event) {
//     event.preventDefault();
//     const id = $("#post-id").val();
//     const title = $("#post-title").val();
//     const content = $("#post-content").val();

//     if (id && title && content) {
//       // Send a POST request to the API endpoint
//       const response = fetch(`/api/projects/${id}`, {
//         method: "PUT",
//         body: JSON.stringify({ id, title, content }),
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((data) => data.json())
//         .then((response) => {
//           document.location.replace("/dashboard");
//         })
//         .catch((err) => {
//           alert("Err", err);
//         });
//     }
//   }

//   $("#edit-post").on("click", updatePost);
// })();

// (function () {
//   function deletePost(event) {
//     event.preventDefault();
//     const id = $("#post-id").val();
//     if (id) {
//       // Send a POST request to the API endpoint
//       const response = fetch(`/api/projects/${id}`, {
//         method: "DELETE",
//         headers: { "Content-Type": "application/json" },
//       })
//         .then((data) => data.json())
//         .then((response) => {
//           document.location.replace("/dashboard");
//         })
//         .catch((err) => {
//           alert("Err", err);
//         });
//     }
//   }

//   $("#delete-post").on("click", deletePost);
// })();

// (function () {
//   function displayPosts() {
//     const
//   }
// })
