const projects = [
  {
    title: "Netflix Clone",
    photo: "netflix-clone.png",
    description:
      " Last Christmas I worked on a clone of Netflix. It was my first full-stack multi-language application. I made a front end in React, Javascript, HTML and CSS and I added an api in Java with Spring Boot. The api connects the front end with a database in PostgreSQL. The application also consumes the TMDB api, which gives access to a huge catalogue of films. I use this catalogue to display the films in the front end and store in my own database your film preferences (liked films, loved films, your watchlist...). The page also includes a search function and a basic algorithm that places users' favorite genres on top of the website. \n This project helped me better understand the structures of apis and allowed me to really work in my CSS skills. It was nice to have a design that I could copy. It was a challenge to learn new structures and effects. ",
    link: "https://netflixclone-57465.web.app/",
    githubRepo: [
      "https://github.com/klaw94/netflixapi",
      "https://github.com/klaw94/cloneNetflixReact",
    ],
    languages: [
      "Javascript",
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "render",
      "fly.io",
      "Firebase",
    ],
  },
  {
    title: "IT Landscape App",
    photo: "itlandschap.png",
    description:
      "This is an application developed by Qquest with the goal of mapping the company's IT landscape. The application was developed using React, Java Spring Boot and with a PostgreSQL database. My tasks consisted of adding functionalities to both the front-end and the back-end. Examples of this include a secure authorization system for the back-end or developing different panels to associate tasks to different apps or updating the apps'information." +
      " I am especially proud of the api, for which I was responsible. It was a more complex api than I was used to, because it included a big database, with very different relationships between tables. I learned a lot about data models and structures and how can you better organise your tables, in order to get data more efficiently.",
    link: "",
    githubRepo: ["https://gitlab.com/Reinaldinus/it-plaat-app"],
    languages: [
      "Javascript",
      "React",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "render",
      "fly.io",
      "Firebase",
    ],
  },
  {
    title: "Pandemic",
    photo: "pandemic.png",
    description:
      "I am currtently working on this virtual version of the boardgame Pandemic. In this game 4 players have to move through a world map, cleaning cubes. I am making it with React and Javascript. I really like boardgames, so it is a very entertaining project, and it also helps me understand React better. The game has many rules and a strict playing order. Because of that, I have to pay extra attention to React's rerendering patterns.",
    link: "",
    githubRepo: ["https://github.com/klaw94/pandemic"],
    languages: ["Javascript", "React"],
  },

  {
    title: "Trivial",
    photo: "trivial.png",
    description: "Trivial app in React using the api of Open Trivial Database",
    link: "https://trivialscrimbatut.web.app/",
    githubRepo: ["https://github.com/klaw94/trivialReact"],
    languages: ["Javascript", "React", "Firebase"],
  },
  {
    title: "Black Jack",
    photo: "blackjack.png",
    description:
      "My first ever Javascript app. It is a Blackjack game made with Vanilla Javascript, HTML and CSS. Play against the computer and see who can be closer to 21! I also have a React version of it",
    link: "https://blackjackjs-799a0.web.app/",
    githubRepo: ["https://github.com/klaw94/blackjack"],
    languages: ["Javascript", "React", "Firebase"],
  },
  {
    title: "Froggy",
    photo: "frog.png",
    description:
      "Game made in Vanilla Javascript. A frog has to cross the road avoiding the cars and cross the river jumping from log to log.",
    link: "https://frog-6daaa.web.app/index.html",
    githubRepo: ["https://github.com/klaw94/froggame"],
    languages: ["Javascript", "Firebase"],
  },
  {
    title: "Break Out",
    photo: "break.png",
    description:
      "Game made in Vanilla Javascript. The player has to destroy all the blocks by moving the platform. If you hit a green block, you get an extra ball. I learned a lot about movements and timers with this app",
    link: "https://breakout-5a2e7.web.app/",
    githubRepo: ["https://github.com/klaw94/breakout"],
    languages: ["Javascript", "Firebase"],
  },
  {
    title: "Moon Lander",
    photo: "moon.png",
    description:
      "Copy of the classic game Moon Lander, made in Java with a GUI made with Java Swing. The player can press the arrows to slow down the rocket and have a save landing. I also used Java Spring Boot to save the best scores in a PostgreSQL database.",
    link: "",
    githubRepo: ["https://github.com/klaw94/lunarlander"],
    languages: ["Java", "Java Swing", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Snake",
    photo: "snake.png",
    description:
      "Copy of the classic game Snake, made in Java with a GUI made with Java Swing. The player can press the arrows to change directions, avoid the walls and eat the apples. I also used Java Spring Boot to save the best scores in a PostgreSQL database.",
    link: "",
    githubRepo: ["https://github.com/klaw94/snakegui"],
    languages: ["Java", "Java Swing", "Spring Boot", "PostgreSQL"],
  },
  {
    title: "Mine Sweeper",
    photo: "mijnenveger.png",
    description:
      "Copy of the game Mine Sweeper, made in Java with a GUI made with Java Swing.",
    link: "",
    githubRepo: ["https://github.com/klaw94/MinesweeperGui"],
    languages: ["Java", "Java Swing"],
  },
  {
    title: "2048",
    photo: "2048.png",
    description:
      "Copy of the game 2048, made in Java with a GUI made with Java Swing. The player can press the arrows add numbers. The objective is to get to 2048.",
    link: "",
    githubRepo: ["https://github.com/klaw94/tidier2048"],
    languages: ["Java", "Java Swing"],
  },
];

export default projects;
//What did I learn, description,
