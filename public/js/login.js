// const login = async (event) => {
// console.log("clicked");
//     event.preventDefault();
  
//     // Collect values from the login form
//     const email = $('#login-email').val();
//     const password = $('#login-password').val();
  
//     if (email && password) {
//       // Send a POST request to the API endpoint
//       const response = await fetch('/api/users/login', {
//         method: 'POST',
//         body: JSON.stringify({ email, password }),
//         headers: { 
//           'Content-Type': 'application/json'
//          },
//       });
  
//       if (response.ok) {
//         // If successful, redirect the browser to the profile page
// const { user } = response;
// const { id, email, name } = user;
// sessionStorage.setItem("user", JSON.stringify({ id, email, name }));

//         document.location.replace('/project');

//       } else {
//         alert(response.statusText);
//       }
//     }
// };
  
// $('.login-form').on('submit', login);

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
          response.json("Err", err);
        });
    }
  }

  $("#login-form").on("click", login);
})();



