document.addEventListener("DOMContentLoaded", function(e) {

    let website = new Website();

    
});

let pageContent = document.querySelector(".pageContent");


class Page {
    constructor(page) {
        this.name = page.name;
        this.intro = page.content.intro;
        this.info = page.content.info;
        this.images = page.content.images;
        this.wrapper = document.querySelector(".pageContent");
        this.class = page.class;
    }
    loadPage() {
        while (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.lastChild);
        }
        Website.changeTitle(this.name);
        this.wrapper.classList.add(this.class);
        let header = document.createElement("h2");
        let imgWrapper = document.createElement("div");
        imgWrapper.className = "headerImg";
        this.wrapper.appendChild(imgWrapper);
        let img = document.createElement("img");
        img.src = this.images[0].src;
        img.alt = this.images[0].alt;
        let imgText = document.createElement("p");
        imgText.innerHTML = this.images[0].text;
        imgText.className = "imgText";
        imgWrapper.appendChild(img);
        imgWrapper.appendChild(imgText);

        let introWrapper = document.createElement("div");
        introWrapper.classList.add("introWrapper");
        introWrapper.classList.add(this.class + "Intro");
        this.wrapper.appendChild(introWrapper);
        header.innerHTML = this.name;
        introWrapper.appendChild(header);
        // add intro text
        for (let text of this.intro) {
            let intro = document.createElement("p");
            intro.innerHTML = text;
            intro.className = "intro";
            introWrapper.appendChild(intro);
        }

        
        // add additional info text
        for (let i = 0; i < this.info.length; i++) {
            let sectionWrapper = document.createElement("div");
            sectionWrapper.classList.add("section" + (i + 1));
            sectionWrapper.classList.add("section");
            this.wrapper.appendChild(sectionWrapper);
            let title = document.createElement("h3");
            title.innerHTML = this.info[0].title;
            sectionWrapper.appendChild(title);
            for (let part of this.info[i].text) {
                let info = document.createElement("p");
                info.innerHTML = part;
                sectionWrapper.appendChild(info);
            }

        }
    }

}
    

class Website {
    constructor() {
        this.pages = [];
        for (let page of pageMenu) {
            this.pages.push(new Page(page))
        }

        this.menu_button = document.querySelector(".menu_button");
        this.menu = document.querySelector(".menu");
        this.ul = document.querySelector(".menu_list");
    
        
        this.menu_button.onmouseover = () => {
            if (this.menu.classList.contains("closed")) {
                this.menu.classList.add("hover");
                this.menu_button.classList.add("reveal");
                this.menu_button.innerHTML = "= menu";
            }
        }
        this.menu_button.onmouseout = () => {
            this.menu.classList.remove("hover");
            if (this.menu.classList.contains("closed")) {
                this.menu_button.innerHTML = "|||";
            }
            this.menu_button.classList.remove("reveal");
        }
        this.menu_button.addEventListener("click", e => {
            this.toggleMenu();
        })
    }
    toggleMenu() {
        if (this.menu.classList.contains("closed")) {
            this.menu_button.innerHTML = "X";
            this.menu.classList.remove("hover");
            this.loadMenuItems();

        } else {
            this.menu_button.innerHTML = "|||";
            this.menu.classList.add("hover");
            setTimeout(() => {
                while (this.ul.firstChild) {
                    this.ul.removeChild(this.ul.lastChild);
                }
            }, 500);
        }
        this.menu.classList.toggle("closed");
    }
    static changeTitle(page) {
        let title = document.getElementsByTagName("title")[0];
        title.innerHTML = "Maja Thunberg - " + page;
    }

    loadMenuItems() {
        for (let page of this.pages) {
            let li = document.createElement("li");
            li.className = "nav-item"
            let a = document.createElement("a");
            a.className = "nav-link";
            a.innerHTML = page.name;
            a.addEventListener("click", e => {
                page.loadPage();
                this.toggleMenu();
                a.classList.add("clicked");
                this.menu.classList.remove("hover");
            });
            this.ul.appendChild(li);
            li.appendChild(a);
        }
    }
}
