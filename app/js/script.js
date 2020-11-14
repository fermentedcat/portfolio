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
        

        //* MENU BUTTON *//
        //// Tab from ////
        this.menu_button.addEventListener("keydown", e => {
            e.preventDefault();
            this.tabFromMenuBtn(e);
        })

        //// Tab to ////
        this.menu_button.addEventListener("keyup", e => {
            e.preventDefault();
            this.tabToMenuBtn(e);
        })
        //// Click on ////
        this.menu_button.addEventListener("click", e => {
            this.toggleMenu();
        })

        //// Hover on ////
        this.menu_button.onmouseover = () => {
            if (this.menu.classList.contains("closed")) {
                this.menu.classList.add("hover");
                this.menu_button.classList.add("reveal");
                this.menu_button.innerHTML = "= menu";
            }
        }
        //// Leave hover ////
        this.menu_button.onmouseout = () => {
            this.menu.classList.remove("hover");
            if (this.menu.classList.contains("closed")) {
                this.menu_button.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
            }
            this.menu_button.classList.remove("reveal");
        }

        //// click on landing page title to open menu
        this.border = document.querySelector(".borderImage");

        this.border.addEventListener("click", e => {
            this.enterPage();
        })
        this.border.addEventListener("keyup", e => {
            e.preventDefault();
            if (e.code == "Enter") {
                this.enterPage();
            }
        })
    }
    enterPage() {
        //// ENTER PAGE from landing ////
        let firstClass = document.querySelectorAll(".firstDisplay");
        for (let elem of firstClass) {
            elem.classList.remove("firstDisplay");
        }
        this.border.removeAttribute("tabindex");
        this.border.removeAttribute("role");
        this.toggleMenu();
    }
    tabFromMenuBtn(e) {
        //// ENTER ////
        if (e.key == "Enter") { //// OPEN OR CLOSE MENU
            this.toggleMenu();
            this.menu_button.classList.remove("reveal");
            this.menu.classList.remove("hover");
            console.log("enter 33");
        }
        //// TAB ////
        if (e.keyCode == 9) {   //// IF MENU CLOSED 
            if (this.menu.classList.contains("closed")) {
                this.menu_button.blur();  // release focus to go into page
                if (this.menu.classList.contains("closed")) { //// if menu "hover" -  
                    this.menu_button.classList.remove("reveal");     //// leave "hover" state
                    this.menu.classList.remove("hover");
                    this.menu_button.innerHTML = '<i class="fas fa-bars fa-lg"></i>';
                    console.log("leave hover state");
                }
            } else {    //// IF MENU OPEN - GO TO TOP MENU ITEM
                this.ul.firstChild.firstChild.focus();
            }
        }
    }
    tabToMenuBtn(e) {
        if (e.keyCode == 9) { //// TAB TO MENU BUTTON - REVEAL MENU
            if (!this.menu.classList.contains("hover") && this.menu.classList.contains("closed")) {
                this.menu_button.classList.add("reveal"); 
                this.menu.classList.add("hover");
                this.menu_button.innerHTML = "= menu";
                console.log("REVEAL MENU");
            }
        }  
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
            if (!this.menu_button.classList.contains("noDisplay")) {
                if (page.class == "contact") {
                    a.addEventListener("keydown", e => {
                        console.log("hello");
                        if (e.keyCode == 9) { //! kolla annat key ord
                            e.preventDefault();
                            this.menu_button.focus();
                        }
                    })
                }
            }

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
