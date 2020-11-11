document.addEventListener("DOMContentLoaded", function(e) {

    new Website();

});

let pageContent = document.querySelector(".pageContent");

class Website {
    constructor() {
        this.pages = [];
        for (let page of pageMenu) {
            this.pages.push(new Page(page))
        }

        this.menu_button = document.querySelector(".menu_button");
        this.menu_button.setAttribute("tabindex", "0");
        this.menu = document.querySelector(".menu");
        this.ul = document.querySelector(".menu_list");
        
        this.menu_button.addEventListener("keyup", e => {
            e.preventDefault();
            if (e.keyCode == 9) {
                this.toggleMenu();
            }
        })
        
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

        //// click on landing page title to open menu
        document.querySelector(".backgroundImage").addEventListener("click", e => {
            let firstClass = document.querySelectorAll(".firstDisplay");
            for (let elem of firstClass) {
                elem.classList.remove("firstDisplay");
            }
            this.toggleMenu();
        })
    }

    toggleMenu() {
        if (this.menu.classList.contains("closed")) {
            this.menu_button.innerHTML = "X";
            // this.menu.classList.remove("closed");

            this.menu.classList.remove("hover");
            this.menu.classList.remove("noDisplay");
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
            let a = document.createElement("a");
            a.setAttribute("tabindex", "0");

            // a.className = "nav-link";
            a.className = `nav-${page.class}`;
            a.innerHTML = page.name;
            a.addEventListener("keyup", e => {
                e.preventDefault();
                if (e.code == "Enter") {
                    page.loadPage();
                    this.toggleMenu();
                    a.classList.add("clicked");
                    this.menu.classList.remove("hover");
                    this.menu_button.classList.remove("noDisplay");
                }
            })
            a.addEventListener("click", e => {
                page.loadPage();
                this.toggleMenu();
                a.classList.add("clicked");
                this.menu.classList.remove("hover");
                this.menu_button.classList.remove("noDisplay");
            });
            this.ul.appendChild(li);
            li.appendChild(a);
        }
    }
}
