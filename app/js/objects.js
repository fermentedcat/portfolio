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
                    text: ["My debut solo project.", 
                    "The main aim for this project was to use an API and to build an app to check for correct answers.", 
                    "I loved doing this, this is where I first kind of understood OOP.", 
                    "", 
                    ""],
                    link: "https://github.com/fermentedcat/quiz",
                    images: ""
                },
                {
                    title: "Yatzy",
                    text: ["As my first group project I did at Nackademin we were tasked to make a Yahtzee game.", 
                    "As we were only a few weeks in, I learned a LOT during this project.", 
                    "I also enjoyed being totally lost in code and fearlessly just running with any idea for problem solving", 
                    "Having to re-write code as time went on and we learnt more at school was a good exercise too.", 
                    "If set to do this over I would probably (hopefully) have a totally different idea of how to implement it."],
                    link: "https://github.com/fermentedcat/YatzyGruppen_2",
                    images: ""
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
                    src: "../resources/images/self-portrait.jpg",
                    alt: "Colorful self-portrait",
                    text: "This is a photo-realistic drawing of me thinking about pizza."
                }
            ]
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





