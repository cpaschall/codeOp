// const loginFormHandler = async (event) => {
//     event.preventDefault();
  
//     // Collect values from the login form
//     const email = document.querySelector('#login-email').value.trim();
//     const password = document.querySelector('#login-password').value.trim();
  
//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/user/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 
//           'Content-Type': 'application/json'
//          },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
//         document.location.replace('/dashboard');
//       } else {
//         alert(response.statusText);
//       }
//     }
// };
  
// document
//     .querySelector('.login-form')
//     .addEventListener('submit', loginFormHandler);

(function () {
  function login() {
    //   event.preventDefault();
    console.log("clicked");
    const email = $("#login-email").val();
    const password = $("#login-password").val();

    if (email && password) {
      // Send a POST request to the API endpoint
      const response = fetch("/api/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      })
        .then((data) => data.json())
        

        .then((response) => {
          const { user } = response;
          const { id, email, name } = user;
          sessionStorage.setItem("user", JSON.stringify({ id, email, name }));
          document.location.replace("/project");
        })
        .catch((err) => {
          response.status(400).json("Err", err);
        });
    }
  }

  $("#login-form").on("click", login);
})();



