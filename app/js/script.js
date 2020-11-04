document.addEventListener("DOMContentLoaded", function(e) {

    let website = new Website();

    
});
    

class Website {
    constructor() {
        this.pages = [];
        for (let page of pageMenu) {
            this.pages.push(new Page(page))
        }

        this.menu_button = document.querySelector(".menu_button");
        this.menu = document.querySelector(".menu");
        this.ul = document.querySelector(".menu_list");
        this.wrapper = document.querySelector(".backgroundWrapper");

        this.menu_button.addEventListener("click", e => {
            if (this.menu.classList.contains("closed")) {
                this.menu_button.innerHTML = "X";
                this.loadMenuItems();
                this.wrapper.style.width = "63vw";
            } else {
                this.menu_button.innerHTML = "|||";
                this.wrapper.style.width = "100%";
                while (ul.firstChild) {
                    this.ul.removeChild(ul.lastChild);
                }
            }
            this.menu.classList.toggle("closed");
        })
    }
    static changeTitle(page) {
        let title = document.getElementsByTagName("title")[0];
        title.innerHTML = "Maja Thunberg - " + page;
    }

    loadMenuItems() {
        for (let page of this.pages) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.innerHTML = page.name;
            a.addEventListener("click", e => {
                page.loadPage();
            });
            this.ul.appendChild(li);
            li.appendChild(a);
        }
    }
}
