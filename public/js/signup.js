// const signupFormHandler = async (event) => {
//     event.preventDefault();

//     const name = $('#username').value.trim();
//     const email = $('#signup-email').value.trim();
//     const password= $('#signup-password').value.trim();
//     const skills = $(".form-check-input").val().trim();

//     if (name && email && password && skills) {
//       const response = await fetch('/api/users/signup', {
//         method: 'POST',
//         body: JSON.stringify({ name, email, password, skills }),
//         headers: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//         document.location.replace('/profile');
//         } else {
//         alert(response.statusText);
//         }
//     }
// };


//   $('.signup-form').on('submit', signupFormHandler);

(function () {
  function signup(event) {
    console.log("click")
    event.preventDefault();
    const username = $("#signup-name").val();
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
          document.location.replace("/login");
        })
        .catch((err) => {
          alert("Err", err);
        });
    }
  }

  $("#signup").on("submit", signup);
})();
