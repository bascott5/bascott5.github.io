const projectsBtn = document.getElementById("projects");
const designsBtn = document.getElementById("designs");

const projectContainer = document.getElementById("project-container");
const designContainer = document.getElementById("design-container");

projectsBtn.addEventListener("click", () => {
    let projects = [
        {
            name: "Sorting Algorithm Visualizer",
            description: "My first ever project, Sorting Algorithm Visualizer shows each step of the most popular sorting algorithms. It was built in React.",
            url: "https://bascott5.github.io/sorting-algorithm-visualization/",
        },
        {
            name: "Pet Artists",
            description: "Pet Artists is a website that displays pictures of dogs and cats using the Dog API and Cat API. It taught me how to use Angular and how to make queries.",
            url: "https://bascott5.github.io/pet-artists/",
        },
        {
            name: "JumperGuy",
            description: "JumperGuy is a 2D platforming game that challenges the player to get to the highest point. It was built with Angular and required dynamic animations that reacted to the successes and failures of the player.",
            url: "https://bascott5.github.io/jumper-guy/",
        },
        {
            name: "StudyGrouper",
            description: "StudyGrouper was built as a social media platform where tutors and students can connect. It was developed in Spring Boot and helped me learn a lot about back-end development.",
            url: "https://github.com/bascott5/study-grouper",
        },
        {
            name: "Magic Galore",
            description: "Magic Galore is a fully-featured, mock ecommerce site for buying Magic: The Gathering cards. It demonstrates that I know how to connect a front-end, back-end, and database to each other.",
            url: "https://github.com/bascott5/magic-galore",
        },
        {
            name: "VectorShield",
            description: "VectorShield is a website that helps finding Malaria reports across the world easy, and can help predict potential outbreaks using AI.",
            url: "https://github.com/aolson078/VectorShield",
        },
        {
            name: "Last Rolls",
            description: "LastRolls is a game where you take turns rolling a die with your opponent. Whatever it lands on, that's the new number of sides it has. The first to roll a one loses!",
            url: "https://bascott5.github.io/last-rolls/",
        },
        {
            name: "Web Playlist",
            description: "Web Playlist is a simple playlist of royalty free music and demonstrates the use of Javascript's Audio object.",
            url: "https://bascott5.github.io/playlist/",
        },
        {
            name: "Cards",
            description: "A client-side web app for moving around and using a deck of playing cards.",
            url: "https://bascott5.github.io/cards/",
        },
    ];

    if (projectContainer.firstChild) {
        return;
    }

    while (designContainer.firstChild) {
        designContainer.removeChild(designContainer.lastChild);
    }

    for (let i = 0; i < projects.length; i++) {
        const a = document.createElement("a");
        const img = document.createElement("img");
        const description = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        a.href = projects[i].url;
        img.src = "assets/project" + (i + 1) + ".png";
        img.alt = "Project " + (i + 1);

        a.appendChild(img);

        description.classList.add("description");
        h5.textContent = projects[i].name;
        p.textContent = projects[i].description;
        description.appendChild(h5);
        description.appendChild(p);

        a.appendChild(description);
        projectContainer.appendChild(a);
    }
});

designsBtn.addEventListener("click", () => {
    let designs = [
        {
            name: "Portfolio website",
            description: "This is my portfolio website",
        }
    ];

    if (designContainer.firstChild) {
        return;
    }

    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.lastChild);
    }

    for (let i = 0; i < designs.length; i++) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const description = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        img.src = "assets/design" + (i + 1) + ".png";
        img.alt = "Design " + (i + 1);

        div.appendChild(img);

        p.classList.add("description");
        h5.textContent = designs[i].name;
        p.textContent = designs[i].description;
        description.appendChild(h5);
        description.appendChild(p);

        div.appendChild(description);
        designContainer.appendChild(div);
    }
});

/*function renderProjectsOrDesigns(mode) {
    let projects = [
        {
            name: "",
            description: "",
            url: "",
        },
    ];

    for (let i = 0; i < projects.length; i++) {
        const a = document.createElement("a");
        const img = document.createElement("img");
        const description = document.createElement("div");
        const h5 = document.createElement("h5");
        const p = document.createElement("p");

        a.href = projects[i].url;
        img.src = "assets/project" + (i + 1) + ".png";
        img.alt = "Project " + (i + 1);

        a.appendChild(img);

        description.classList.add("description");
        h5.textContent = projects[i].name;
        p.textContent = projects[i].description;
        description.appendChild(h5);
        description.appendChild(p);

        a.appendChild(description);
        projectContainer.appendChild(a);
    }
}*/