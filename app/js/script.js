document.addEventListener("DOMContentLoaded", function(e) {

    new Website();

});

let pageContent = document.querySelector(".pageContent");

class Website {
    constructor() {
        //// Pages from "pageMenu" object
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
        this.menu_button.addEventListener("click", e => {
            this.toggleMenu();
        })

        //// NAV BUTTON HOVER ////
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
                this.menu_button.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
            }
            this.menu_button.classList.remove("reveal");
        }

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
    //// TOGGLE NAV MENU ////
    toggleMenu() {
        if (this.menu.classList.contains("closed")) {
            this.menu_button.innerHTML = '<i class="fas fa-times fa-lg"></i>';
            this.menu.classList.remove("hover");
            this.menu.classList.remove("noDisplay");
            this.loadMenuItems();
            this.menu_button.setAttribute("aria-label", "Close menu");

        } else {
            this.menu_button.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
            this.menu.classList.add("hover");
            this.menu_button.setAttribute("aria-label", "Open menu");
            setTimeout(() => {
                while (this.ul.firstChild) {
                    this.ul.removeChild(this.ul.lastChild);
                }
            }, 500);
        }
        this.menu.classList.toggle("closed");
    }
    //// CHANGE BROWSER TITLE ////
    static changeTitle(page) {
        let title = document.getElementsByTagName("title")[0];
        title.innerHTML = "Maja Thunberg - " + page;
    }

    //// LOAD MENU ITEMS ////
    loadMenuItems() {
        for (let page of this.pages) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("tabindex", "0");
            a.className = `nav-${page.class}`;
            a.innerHTML = page.name;
            
            li.appendChild(a);
            this.ul.appendChild(li);

            a.addEventListener("keyup", e => {
                e.preventDefault();
                if (e.code == "Enter") {
                    menuAction(this);
                }
            });
            a.addEventListener("click", e => {
                menuAction(this);
            });

            //// CLICK ON MENU ITEM ////
            function menuAction(website) {
                if (page.name == "Portfolio" && !a.classList.contains("clicked")) {
                    loadSubMenu(page.content, website);
                    a.classList.add("clicked");
                } else if (page.name == "Portfolio" && a.classList.contains("clicked")) {
                    document.querySelector(".subMenu").remove();
                    a.classList.remove("clicked");
                } else {
                    page.loadPage();
                    website.toggleMenu();
                    website.menu.classList.remove("hover");
                    website.menu_button.classList.remove("noDisplay");
                    a.classList.add("clicked");
                }
            }

            //// PORTFOLIO SUB CATEGORIES ////
            function loadSubMenu(content, website) {
                let subUl = document.createElement("ul");
                subUl.className = "subMenu";
                for (let subCat of content) {
                    let subLi = document.createElement("li");
                    let a = document.createElement("a");
                    a.innerHTML = subCat.name;
                    a.className = `subCat sub${subCat.name}`
                    let i = document.createElement("i");
                    i.className = subCat.icon;
                    subLi.setAttribute("tabindex", "0");
                    subLi.appendChild(i);
                    subLi.appendChild(a);
                    subUl.appendChild(subLi);
                    
                    subLi.addEventListener("keyup", e => {
                        e.preventDefault();
                        if (e.code == "Enter") {
                            page.loadPage(subCat);
                            website.toggleMenu();
                            website.menu.classList.remove("hover");
                            website.menu_button.classList.remove("noDisplay");
                        }
                    })
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
