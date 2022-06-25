// const { faker } = require("@faker-js/faker");

console.log("Project works")

const newSeedHandler = async (event) => {
  event.preventDefault();
  console.log(event)
  
    const title = faker.music.songName();
    const content = faker.company.catchPhrase();
    const skills = ["HTML", "JavaScript", "CSS", "MySql", "React"];
    const repo = faker.internet.url();


  if (title && content ) {
    const response = await fetch(`/api/seeds`, {
      method: "POST",
      body: JSON.stringify({ proj_name: title, summary: content, language: skills, proj_repo: repo}),
    //   body: JSON.stringify({ proj_name, summary, language, proj_repo}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      document.location.replace("/seedProjects");
      console.log("project created")
    } else {
      alert("Failed to create project");
    }
  }
};
// console.log($("#project-form").length)
$("#gen-proj").on("submit", newSeedHandler)