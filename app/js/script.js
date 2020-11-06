document.addEventListener("DOMContentLoaded", function(e) {

    let website = new Website();

    
});

let pageContent = document.querySelector(".pageContent");


class Page {
    constructor(page) {
        this.name = page.name;
        this.intro = page.content.intro;
        this.pageContent = page.pageContent;
    }
    loadPage() {
        while (pageContent.firstChild) {
            pageContent.removeChild(pageContent.lastChild);
        }
        console.log(this.name);
        Website.changeTitle(this.name);
        console.log(this.intro);
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
    
        this.menu_button.addEventListener("click", e => {
            this.toggleMenu();
        })
    }
    toggleMenu() {
        if (this.menu.classList.contains("closed")) {
            this.menu_button.innerHTML = "X";
            this.loadMenuItems();

        } else {
            this.menu_button.innerHTML = "|||";
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
                
            });
            this.ul.appendChild(li);
            li.appendChild(a);
        }
    }
}
