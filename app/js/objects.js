
/////   PAGE MATERIAL   ////

let pageMenu = [
    {   //// ABOUT PAGE ////
        name: "About",
        class: "about",
        content: {
            intro: ['Hi! I\'m a curious and creative aspiring Fullstack developer based in Stockholm.<br>Currently I\'m in my first year of <a href="#section1">Nackademin</a>\'s 2-year higher vocational education program.', "With a background in art and music, I've recently turned around and started on a new path. <br> My eye for detail and mind for languages and problem-solving made it be love at first console.log.", 
            "The structures behind a language and the puzzles of it has always been interesting to me. I also find that although I like to work on my own, with a well-functioning team you can do so much more.",
            "I'm drawn towards backend, frontend and everything in between. Basically I want to understand everything.",
            ],
            info: [
                {   //// INFO NACKADEMIN ////
                    title: "About Nackademin",
                    text: [
                        "Web Developer Full Stack Open Source is a 2-year program at Nackademin which provides a broad competence in programming, both backend and frontend. As a student, you learn to develop interactive web applications in, among others, NodeJS, PHP and JavaScript for complex environments with regard to performance and large amounts of data. You also learn to develop modern applications using HTML, CSS and various JavaScript libraries. The education provides knowledge of the specific development environments, programming languages and guidelines that the web requires today.",
                        "In addition to this, you also learn to collaborate in agile projects, from coding to implementation. You become used to working in a solution-oriented way, both independently and in development teams.",
                        "Studying at Nackademin means learning a profession and not a subject. From the student, this requires discipline, great drive and personal responsibility for their studies. While Nackademin provides the conditions to succeed, the student is responsible for their learning. The education is conducted full time but some days are set for self-study."
                    ],
                    link: "https://nackademin.se/utbildningar/webbutvecklare-fullstack-open-source/"
                }
            ],
            images: [
                {   //// IMAGE ////
                    srcset: "resources/images/self-portrait-300.jpg 300w, resources/images/self-portrait-600.jpg 600w, resources/images/self-portrait-900.jpg 900w, resources/images/self-portrait-1200.jpg 1200w",
                    src: "resources/images/self-portrait-900.jpg",
                    alt: "Colorful self-portrait",
                    text: "This is a photo-realistic drawing of me thinking about pizza.",
                    sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -7vw ) * 0.57)",
                } //TODO: ÄNDRA efter ändringar
            ],
            
        }
    },
    {   //// PORTFOLIO PAGES////
        name: "Portfolio",
        class: "portfolio",
        content: [
            {   //// SUB: CODE ////
                name: "Code",
                icon: "fas fa-code",
                intro: ["Here are some of my early works. Check back in, there will be more soon!"],
                info: [
                    {   //// QUIZ ////
                        title: "Quiz",
                        text: ["My debut solo project. The main aim for this project was to use an API and to build an app to check for correct answers. I loved doing this. I became more familiar with how to plan and structure a project, and this is where I first kind of understood OOP."
                        ],
                        link: "https://fermentedcat.github.io/quiz/",
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
                    {   //// YATZY ////
                        title: "Yatzy",
                        text: ["As my first group project I did at Nackademin we were tasked to make a Yahtzee game. As we were only a few weeks in, this project taught me a lot.", "We got the idea to create a scoreboard generated by the amount of players chosen by the user. I enjoyed being totally lost in code and fearlessly just running with any idea for problem solving. Having to re-write code as time went on and we learnt more at school was a good exercise too. If set to do this over I would probably (hopefully) have a totally different idea of how to implement it."],
                        link: "https://fermentedcat.github.io/YatzyGruppen_2/Main",
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
                ]
            },
            {   //// SUB: ART ////
                name: "Art",
                icon: "fas fa-brush",
                intro: ["In most things I do I like find a way to incorporate creativity. But sometimes there is drawing just for the sake of it.", "Scroll down to find some things I made."],
                info: [
                    {
                        title: "Water reflection",
                        text: [""],
                        link: "",
                        image: {
                                src: "resources/images/water-s-maja_thunberg.gif",
                                still: "resources/images/water-still-maja_thunberg.jpg",
                                alt: "Animation of face reflecting in the water.",
                                text: 'From <a href "https://www.youtube.com/watch?v=ekF7mymVYGk">Star Horse - Albatross</a> stop motion music video.'
                            },
                        sizes: ""
                    },
                    {
                        title: "Boy",
                        text: [""],
                        link: "",
                        image: {
                            srcset: "",
                            src: "resources/images/adi.jpg",
                            alt: "Colorful drawing of a boy looking tired.",
                            text: ""
                        },
                    },
                    {
                        title: "Sticks and Stones",
                        text: [""],
                        link: "",
                        image: {
                            srcset: "resources/images/Sticks-and-stones-600.jpg 600w, resources/images/Sticks-and-stones-1200.jpg 1200w",
                            sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -9vw ) * 0.7273)",
                            src: "resources/images/Sticks-and-stones-600.jpg",
                            alt: "Green abstract graphic print",
                            text: "Graphic print",
                        }
                    },
                    {
                        title: "Flower field",
                        text: [""],
                        link: "",
                        image: {
                            srcset: "",
                            src: "resources/images/field.jpg",
                            alt: "Drawing of a field of flowers.",
                            text: ""
                        },
                    },
                    {
                        title: "Flip-book",
                        text: [""],
                        link: "",
                        video: {
                            srcset: "",
                            src: "resources/images/Pasta.mp4",
                            alt: "Flip-book with animated plate of pasta",
                            text: "Flip-book"
                        },
                    },
                    {
                        title: "Poster Heaven up Here",
                        text: [""],
                        link: "",
                        image: {
                            srcset: "resources/images/huh1feb14-600.jpg 600w, resources/images/huh1feb14-1200.jpg 1200w",
                            src: "resources/images/huh1feb14-600.jpg",
                            alt: "Colorful painted poster with text coming out of eyes",
                            text: "Poster for Heaven up Here"
                        },
                        sizes: "(max-width: 600px) calc(100vw - 3rem), calc(100vw - 3rem) -9vw ) * 0.7273)",
                    }
                ]
            },
            {   //// SUB: MUSIC ////
                name: "Music",
                icon: "fas fa-compact-disc",
                intro: ['I play in a band called <a href="#section1">Star Horse</a> - a shoegaze/dream-pop band I started with my friends about 10 years ago.', 'This is where I put most of my musical efforts in these days, so I\'m dedicating this page to my band.'],
                info: [
                    {   //// LINKS ////
                        text: "Find us here:",
                        links: [
                            {
                                title: "Spotify",
                                icon: "fab fa-spotify",
                                href: "https://open.spotify.com/artist/1zC23cF77Lj7ukFsy19nor?si=g9lyyNE2RXSKs64WFgNGYA",
                            },
                            {
                                title: "Bandcamp",
                                icon: "fab fa-bandcamp",
                                href: "https://starhorse.bandcamp.com/",
                            },
                            {
                                title: "Instagram",
                                icon: "fab fa-instagram",
                                href: "https://www.instagram.com/starhorsemusic/",
                            },
                            {
                                title: "Facebook",
                                icon: "fab fa-facebook",
                                href: "https://www.facebook.com/starhorsemusic/",
                            },
                        ]
                    },
                    {   //// MATERIAL ////
                        title: "You Said Forever",
                        text: ["Our debut album (2019)"],
                        link: "https://starhorse.bandcamp.com/album/you-said-forever",
                        ariaLabel: "Music player embedded from Bandcamp",
                        embed: '<iframe style="border: 0; width: 350px; height: 753px;" src="https://bandcamp.com/EmbeddedPlayer/album=686016826/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://starhorse.bandcamp.com/album/you-said-forever">You Said Forever by Star Horse</a></iframe>'
                    },
                    {
                        title: "No Memories Before This",
                        text: ["Songs from 2012-2015"],
                        link: "https://starhorse.bandcamp.com/album/you-said-forever",
                        ariaLabel: "Music player embedded from Bandcamp",
                        embed: '<iframe style="border: 0; width: 350px; height: 786px;" src="https://bandcamp.com/EmbeddedPlayer/album=3333529234/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="https://starhorse.bandcamp.com/album/no-memories-before-this">No Memories Before This by Star Horse</a></iframe>'
                    },
                    {
                        title: "Star Horse - Albatross",
                        text: ["Stop motion video for Albatross (2019, You Said Forever)"],
                        ariaLabel: "Stop-motion hand painted music video. Girl walks on the beach and watches birds flying over the ocean.",
                        embed: '<iframe src="https://www.youtube.com/embed/ekF7mymVYGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    },
                    {
                        title: "Star Horse - 100 Eyes",
                        text: ["An oldie with a relatively new video."],
                        ariaLabel: "Music video with overlapping films of snowy forests.",
                        embed: '<iframe src="https://www.youtube.com/embed/nk2ZH_EGZd8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    },
                    {
                        title: "Star Horse - Slower Now",
                        text: ["Music video recorded in a quarry in Skövde."],
                        ariaLabel: "Four-piece band plays music in an abandoned quarry in fall-setting.",
                        embed: '<iframe src="https://www.youtube.com/embed/XN8UkYnsvn0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
                    },
                ]
            }
        ]
    },
    {   //// CONTACT PAGE ////
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
            info: {   //// LINKS ////
                text: "Find me on the web:",
                links: [
                    {
                        title: "LinkedIn",
                        icon: "fab fa-linkedin",
                        href: "https://www.linkedin.com/in/maja-thunberg/",
                    },
                    {
                        title: "GitHub",
                        icon: "fab fa-github",
                        href: "https://github.com/fermentedcat",
                    },
                    {
                        title: "Instagram",
                        icon: "fab fa-instagram",
                        href: "https://www.instagram.com/bada_bing_/",
                    },
                    {
                        title: "Facebook",
                        icon: "fab fa-facebook",
                        href: "https://www.facebook.com/moota.moon",
                    },
                ]
            }
        }
    }];





