var links = {
    home: "index.html",

    linkedIn: "https://www.linkedin.com/in/maja-thunberg/",
    instagram: "https://www.instagram.com/starhorsemusic/",
    github: "https://github.com/fermentedcat"
}

var aboutMe = {
    short: ""
}

let pageMenu = [
    {
        name: "Home",
        class: "home",
        content: {
            intro: "",
            images: ""
        }
    },
    {
        name: "Portfolio",
        class: "portfolio",
        content: {
            intro: ["Here are some early works"],
            info: [
                {
                    title: "Quiz",
                    text: ["My debut solo project. The main aim for this project was to use an API and to build an app to check for correct answers. I loved doing this. I became more familiar with how to plan and structure a project, and this is where I first kind of understood OOP."
                    ],
                    link: "https://github.com/fermentedcat/quiz",
                    images: [
                        {
                            srcset: "resources/images/quiz-1-400.jpg 400w, resources/images/quiz-1-900.jpg 900w, resources/images/quiz-1-1200.jpg 1200w, resources/images/quiz-1-1500.jpg 1500w",
                            src: "resources/images/quiz-1.jpg",
                            alt: "Start quiz screenshot",
                            text: ""
                        },
                        {
                            srcset: "resources/images/quiz-2-400.jpg 400w, resources/images/quiz-2-900.jpg 900w, resources/images/quiz-2-1200.jpg 1200w, resources/images/quiz-2-1500.jpg 1500w",
                            src: "resources/images/quiz-2.jpg",
                            alt: "Select quiz answer screenshot",
                            text: ""
                        },
                        {
                            srcset: "resources/images/quiz-3-400.jpg 400w, resources/images/quiz-3-900.jpg 900w, resources/images/quiz-3-1200.jpg 1200w, resources/images/quiz-3-1500.jpg 1500w",
                            src: "resources/images/quiz-3.jpg",
                            alt: "Quiz result, view correct answers, screenshot",
                            text: ""
                        },
                    ],
                    sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -9vw ) * 0.7273)",
                },
                {
                    title: "Yatzy",
                    text: ["As my first group project I did at Nackademin we were tasked to make a Yahtzee game. As we were only a few weeks in, this project taught me a lot.", "We got the idea to create a scoreboard generated by the amount of players chosen by the user. I enjoyed being totally lost in code and fearlessly just running with any idea for problem solving. Having to re-write code as time went on and we learnt more at school was a good exercise too. If set to do this over I would probably (hopefully) have a totally different idea of how to implement it."],
                    link: "https://github.com/fermentedcat/YatzyGruppen_2",
                    images: [
                        {
                            srcset: "resources/images/yatzy-1-400.jpg 400w, resources/images/yatzy-1-900.jpg 900w, resources/images/yatzy-1-1200.jpg 1200w, resources/images/yatzy-1-1500.jpg 1500w",
                            src: "resources/images/yatzy-1-900.jpg",
                            alt: "Start yatzy game screenshot",
                            text: ""
                        },
                        {
                            srcset: "resources/images/yatzy-2-400.jpg 400w, resources/images/yatzy-2-900.jpg 900w, resources/images/yatzy-2-1200.jpg 1200w, resources/images/yatzy-2-1500.jpg 1500w",
                            src: "resources/images/yatzy-2-900.jpg",
                            alt: "Start yatzy game, enter name, screenshot",
                            text: ""
                        },
                        {
                            srcset: "resources/images/yatzy-3-400.jpg 400w, resources/images/yatzy-3-900.jpg 900w, resources/images/yatzy-3-1200.jpg 1200w, resources/images/yatzy-3-1500.jpg 1500w",
                            src: "resources/images/yatzy-3-900.jpg",
                            alt: "Yatzy game, throw dice, screenshot",
                            text: ""
                        },
                        {
                            srcset: "resources/images/yatzy-4-400.jpg 400w, resources/images/yatzy-4-900.jpg 900w, resources/images/yatzy-4-1200.jpg 1200w, resources/images/yatzy-4-1500.jpg 1500w",
                            src: "resources/images/yatzy-4-900.jpg",
                            alt: "Yatzy game, throw dice, screenshot",
                            text: ""
                        }
                    ],
                    //TODO: ÄNDRA efter ändringar
                    sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -9vw ) * 0.7273)",
                }
            ],
            images: ""
        }
    },
    {
        name: "About",
        class: "about",
        content: {
            intro: ['Hi! I\'m a curious and creative aspiring Fullstack developer based in Stockholm.<br>Currently I\'m in my first year of <a href="#">Nackademin</a>\'s 2-year higher vocational education program.', "With a background in art and music, I've recently turned around and started on a new path. <br> My eye for detail and mind for languages and problem-solving made it be love at first console.log.", 
            "The structures behind a language and the puzzles of it has always been interesting to me. I also find that although I like to work on my own, with a well-functioning team you can do so much more.",
            "I'm drawn towards backend, frontend and everything in between. Basically I want to understand everything.",
            ],
            info: [
                {
                    title: "About Nackademin",
                    text: [
                        "Web Developer Full Stack Open Source is a 2-year program at Nackademin which provides a broad competence in programming, both backend and frontend. As a student, you learn to develop interactive web applications in, among others, NodeJS, PHP and JavaScript for complex environments with regard to performance and large amounts of data. You also learn to develop modern applications using HTML, CSS and various JavaScript libraries. The education provides knowledge of the specific development environments, programming languages and guidelines that the web requires today.",
                        "In addition to this, you also learn to collaborate in agile projects, from coding to implementation. You become used to working in a solution-oriented way, both independently and in development teams.",
                        "Studying at Nackademin means learning a profession and not a subject. From the student, this requires discipline, great drive and personal responsibility for their studies. While Nackademin provides the conditions to succeed, the student is responsible for their learning. The education is conducted full time but some days are set for self-study."
                    ]
                }
            ],
            images: [
                {
                    srcset: "resources/images/self-portrait-300.jpg 300w, resources/images/self-portrait-600.jpg 600w, resources/images/self-portrait-900.jpg 900w, resources/images/self-portrait-1200.jpg 1200w",
                    src: "resources/images/self-portrait-900.jpg",
                    alt: "Colorful self-portrait",
                    text: "This is a photo-realistic drawing of me thinking about pizza.",
                    sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -7vw ) * 0.57)",
                } //TODO: ÄNDRA efter ändringar
            ],
            
        }
    },
    {
        name: "Contact",
        class: "contact",
        content: {
            intro: [
                {
                    title: "email:",
                    text: "majaneko@gmail.com"
                },
                {
                    title: "phone:",
                    text: "072-3058222"
                }
            ],
            info: "",
            images: ""
        }
    }];





