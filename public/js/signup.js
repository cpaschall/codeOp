// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const name = document.querySelector('#signup-name').value.trim();
//     const email = document.querySelector('#signup-email').value.trim();
//     const password = document.querySelector('#signup-password').value.trim();

//     if (name && email && password) {
//       const response = await fetch('/api/user', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password }),
//         headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//         document.location.replace('/dashboard');
//         } else {
//         alert(response.statusText);
//         }
//     }
// };

// document
//   .querySelector('.signup-form')
//   .addEventListener('submit', signupFormHandler);

(function () {
  function signup(event) {
    event.preventDefault();
    const username = $("#username").val();
    const email = $("#signup-email").val();
    const password = $("#signup-password").val();

    const skills = $(".form-check-input").val();


    if (username && email && password && skills) {
      // Send a POST request to the API endpoint
      const response = fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name: username, email, password, skills }),
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((response) => {
          document.location.replace("/profile");
        })
        .catch((err) => {
          alert("Err", err);
        });
    }
  }

  $("#signup").on("submit", signup);
})();
