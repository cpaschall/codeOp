(function () {
  function signup(event) {
    console.log("click")
    event.preventDefault();
    const username = $("#signup-name").val();
    const email = $("#signup-email").val();
    const password = $("#signup-password").val();

    const skills = $(".form-check-input").val();

const newArray = [];
$('input:checkbox:checked').map(function () {
  const cb = skills;
  if ($('input:checkbox:checked')) {
      newArray.push(cb.split(','));
  } else {
      newArray.push([]);

  }
  console.log(newArray);
});
    if (username && email && password && skills) {
      // Send a POST request to the API endpoint
      const response = fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name: username, email, password, skills: newArray }),
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
