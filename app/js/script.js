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

        document.querySelector(".borderImage").addEventListener("click", e => {
            let firstClass = document.querySelectorAll(".firstDisplay");
            for (let elem of firstClass) {
                elem.classList.remove("firstDisplay");
            }
            this.toggleMenu();
        })
        document.querySelector(".borderImage").addEventListener("keyup", e => {
            e.preventDefault();
            if (e.code == "Enter") {
                let firstClass = document.querySelectorAll(".firstDisplay");
                for (let elem of firstClass) {
                    elem.classList.remove("firstDisplay");
                }
                this.toggleMenu();
            }
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
                    loadMenu(this);
                }
            })
            a.addEventListener("click", e => {
                loadMenu(this);
            });
            this.ul.appendChild(li);
            li.appendChild(a);

            // function //TODO funktion för val ovan

            function loadMenu(website) {
                if (page.name == "Portfolio" && !a.classList.contains("clicked")) {
                    loadSubMenu(page.content, website);
                } else {
                    page.loadPage();
                    website.toggleMenu();
                    website.menu.classList.remove("hover");
                    website.menu_button.classList.remove("noDisplay");
                }
                a.classList.add("clicked");
            }

            function loadSubMenu(content, website) {
                let subUl = document.createElement("ul");
                subUl.className = "subMenu";
                for (let subCat of content) {
                    let subLi = document.createElement("li");
                    let a = document.createElement("a");
                    a.innerHTML = subCat.name;
                    let i = document.createElement("i");
                    i.className = subCat.icon;
                    subLi.setAttribute("tabindex", "0");
                    subLi.appendChild(i);
                    subLi.appendChild(a);
                    subUl.appendChild(subLi);
                    subLi.addEventListener("click", e => {
                        page.loadPage(subCat);
                        website.toggleMenu();
                        website.menu.classList.remove("hover");
                        website.menu_button.classList.remove("noDisplay");
                    })
                }
                li.parentNode.insertBefore(subUl, li.nextSibling);
            }
        }
    }
}
