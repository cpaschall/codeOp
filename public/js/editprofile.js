
const editProfileHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#edit-name").value.trim();
    const email = document.querySelector("edit-email").value.trim();
    const skills = document.querySelector("#skills-check").value.trim();


    if (name && email && skills) {
        const response = await fetch('/api/editprofile', {
            method: "PUT",
            body: JSON.stringify({ name, email, skills }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            document.location.replace("/profile");
        }
        else {
            alert("Error! Cannot update.");
        }
    }

};

document
  .querySelector('.edit-update')
  .addEventListener('submit', editProfileHandler);