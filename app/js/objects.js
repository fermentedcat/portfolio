var links = {
    home: "index.html",

    linkedIn: "https://www.linkedin.com/in/maja-thunberg/",
    instagram: "https://www.instagram.com/starhorsemusic/",
    github: "https://github.com/fermentedcat"
}

var aboutMe = {
    short: "I'm a curious and creative aspiring Fullstack developer based in Stockholm.<br>Currently in my first year of Nackademin's 2-year higher vocational education program."
}

let pageMenu = [
    {
        name: "Home",
        content: {
            intro: "",
            images: ""
        }
    },
    {
        name: "Portfolio",
        content: {
            intro: "",
            images: ""
        }
    },
    {
        name: "About",
        content: {
            intro: "",
            info: "",
            images: ""
        }
    },
    {
        name: "Contact",
        content: {
            intro: "",
            images: ""
        }
    }];

let pageContent = document.querySelector(".pageContent");


class Page {
    constructor(page) {
        this.name = page.name;
        this.pageContent = page.pageContent;
    }
    loadPage() {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.lastChild);
        }
        console.log(this.name);
        Website.changeTitle(this.name);
    }
}



