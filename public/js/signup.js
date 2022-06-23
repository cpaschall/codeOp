
  const signup= async (event) => {
    console.log("click")
    event.preventDefault();
    const username = $("#signup-name").val();
    const email = $("#signup-email").val();
    const password = $("#signup-password").val();
    
    const skills = $(".form-check-input:checked");

    const newArray = [];
    skills.each(index => newArray.push(skills[index].name))
    console.log(newArray);


    if (username && email && password && skills) {
      // Send a POST request to the API endpoint
      const response = await fetch("/api/users/signup", {
        method: "POST",
        body: JSON.stringify({ name: username, email, password, skills: newArray }),
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok) {
        document.location.replace('/login');
      } else {
        alert("not found");
      }
    }
  };

  $("#signup").on("submit", signup);


