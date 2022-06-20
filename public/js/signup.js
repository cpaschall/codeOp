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
    const username = $("#signup-name").val();
    const email = $("#signup-email").val();
    const password = $("#signup-password").val();

    if (username && email && password) {
      // Send a POST request to the API endpoint
      const response = fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name: username, email, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        .then((response) => {
          document.location.replace("/login");
        })
        .catch((err) => {
          alert("Err", err);
        });
    }
  }

  $("#signup-form").on("submit", signup);
})();