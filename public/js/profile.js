// Global vars to identify blogs
var currentUrl = window.location.pathname;
const parsedCurrUrl = currentUrl.split('/');
const userId = parseInt(parsedCurrUrl[parsedCurrUrl.length -1]);
const req_url = `/api/blog/${userId}`

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


// delete account button
const deleteAcctHandler = async (event) => {
  // if (event.target.hasAttribute("data-id")) {
  //   const id = event.target.getAttribute("data-id");

  //   const response = await fetch(`/api/users/${id}`, {
  //     method: "DELETE",
  //   });

  //   if (response.ok) {
  //     alert("Your account has been deleted");
  //     document.location.replace("/profile");
  //   } else {
  //     alert("Failed to delete account");
  //   }
  // }

  event.preventDefault();

  const response = await fetch(req_url, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json'
    },
  });

  if (response.ok) {
    windows.alert("Your account has been deleted. You will be missed T_T");
    document.location.replace('/');
  }
  else {
    windows.alert("Failed to delete account");
  }
};

document
  .querySelector('#delAcctBtn')
  .addEventListener('submit', deleteAcctHandler);