const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector("#profile-name").value.trim();
  const skills = document.querySelector("#skills_offered").value.trim();

 if (name && skills) {
    const response = await fetch(`/api/profile`, {
      method: "POST",
      body: JSON.stringify({ name, skills }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("no profile found");
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute("data-id")) {
    const id = event.target.getAttribute("data-id");

    const response = await fetch(`/api/profile/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/profile");
    } else {
      alert("Failed to delete project");
    }
  }
};
