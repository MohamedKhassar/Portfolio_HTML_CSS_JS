// map the skills

const mapSkills = () => {
  const skills = [
    {
      name: "HTML",
      image: "/images/html.png",
      experience: 4,
    },
    {
      name: "CSS",
      image: "/images/css.png",
      experience: 4,
    },
    {
      name: "JavaScript",
      image: "/images/js.png",
      experience: 3,
    },
    {
      name: "Java",
      image: "/images/java.png",
      experience: 4,
    },
    {
      name: "React",
      image: "/images/react.png",
      experience: 4,
    },
    {
      name: "Node",
      image: "/images/node.png",
      experience: 4,
    },
  ];
  const skill_cards = document.querySelector(".skills-cards");
  skills.map((item, index) => {
    skill_cards.innerHTML += `
    <div class="skill-item" key=${index}>
    <img src="${item.image}" alt="" />
    <h3>${item.name}</h3>
    <h2>${item.experience} years experience</h2>
    </div>
    `;
  });
};

// map the projects

const mapProjects = () => {
  const projects = [
    {
      name: "chatbot",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet quos harum ex minus nisi necessitatibus laborum rem laboriosam doloribus excepturi nesciunt at laudantium unde eos? Earum molestias dolore veritatis?",
    },
    {
      name: "sentiment analyzer",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet quos harum ex minus nisi necessitatibus laborum rem laboriosam doloribus excepturi nesciunt at laudantium unde eos? Earum molestias dolore veritatis?",
    },
    {
      name: "fashion website",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, amet quos harum ex minus nisi necessitatibus laborum rem laboriosam doloribus excepturi nesciunt at laudantium unde eos? Earum molestias dolore veritatis?",
    },
  ];
  const project_cards = document.querySelector(".project-content");
  projects.map((item, index) => {
    project_cards.innerHTML += `
    <div class="project-item" key=${index}>
    <h3>${item.name}</h3>
    <ul>
    <li>${item.content}</li>
    </ul>
    </div>
    `;
  });
};

// map and add recommendations
let recommendations = [
  "Jane Doe has a remarkable ability to transform ideas into visually stunning and highly functional websites.",
  "Working with Jane Doe has been a pleasure; her attention to detail and dedication to her craft are unparalleled.",
  "Jane's expertise in front-end development is evident through her clean, efficient code and innovative design solutions.",
  "Jane Doe consistently delivers projects on time, often exceeding expectations with her creative problem-solving skills.",
  "Jane is an exceptional communicator, always ensuring that project requirements are fully understood and met.",
  "Her proficiency in modern web technologies and frameworks makes her a valuable asset to any development team.",
  "Jane's passion for web development is reflected in the quality of her work and her continuous pursuit of knowledge.",
  "Jane Doe's collaborative spirit and positive attitude make her a joy to work with, fostering a productive team environment.",
  "Her ability to quickly adapt to new challenges and technologies is impressive, making her a versatile developer.",
  "Jane consistently demonstrates strong project management skills, effectively balancing multiple tasks and deadlines.",
];

const mapRecommendations = () => {
  const recommendation_cards = document.querySelector(".recommendation-cards");
  recommendations.map((item, index) => {
    recommendation_cards.innerHTML += `
          <div class="recommendation-item">
          " ${item} "
          </div>
          `;
  });
};

const form = document.querySelector(".form-submit");
form.addEventListener("submit", (e) => {
  let message = document.querySelector("#message");
  const error = document.querySelector(".message");
  const popup = document.querySelector(".submited");
  e.preventDefault();
  if (message.value.length > 0) {
    recommendations.push(message.value);
    const recommendation_cards = document.querySelector(
      ".recommendation-cards"
    );

    recommendation_cards.innerHTML += `
          <div class="recommendation-item">
          " ${message.value} "
          </div>
          `;
    popup.style.display = "flex";
    message.value = "";
  } else {
    error.style.display = "block";
    error.innerHTML = `<p class="error">please write a message before submitting
    </p>
    `;
  }
});

// close popup

const close = document.querySelector(".passed-btn");
close.addEventListener("click", () => {
  const popup = document.querySelector(".submited");
  popup.style.display = "none";
});

// scroll to home

const home = document.querySelector(".home");
home.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

onload(mapSkills(), mapProjects(), mapRecommendations());
