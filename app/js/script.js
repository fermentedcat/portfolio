document.addEventListener("DOMContentLoaded", function(e) {

    new Website();

    
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
        window.scrollTo(0, 0);
        Website.changeTitle(this.name);
        this.wrapper.className = `pageContent ${this.class}`;
        let header = document.createElement("h2");
        let introWrapper = document.createElement("div");
        introWrapper.classList.add("introWrapper");
        introWrapper.classList.add(this.class + "Intro");
        this.wrapper.appendChild(introWrapper);
        header.innerHTML = this.name;
        introWrapper.appendChild(header);

        if (!this.intro[0].title) {
            // add intro text
            for (let text of this.intro) {
                let intro = document.createElement("p");
                intro.innerHTML = text;
                intro.className = "intro";
                introWrapper.appendChild(intro);
            }
        } else {
            let contactWrapper = document.createElement("div");
            introWrapper.appendChild(contactWrapper);
            for (let part of this.intro) {
                let title = document.createElement("p");
                title.innerHTML = part.title;
                title.className = "contactInfoTitle";
                let text = document.createElement("p");
                text.innerHTML = part.text;
                contactWrapper.appendChild(title);
                contactWrapper.appendChild(text);
            }
        }

        if (this.class == "contact") {
            let form = document.createElement("form");
            this.wrapper.appendChild(form);

            let title = document.createElement("h4");
            title.innerHTML = "Please send me an email and I'll get back to you soon. I'd be happy to hear from you.";
            
            let name = document.createElement("input");
            let email = document.createElement("input");
            let phone = document.createElement("input");
            let message = document.createElement("textarea");

            name.type = "text";
            email.type = "email";
            phone.type = "text";

            name.className = "form-control";
            email.className = "form-control";
            phone.className = "form-control";
            message.className = "form-control";

            name.placeholder = "Your Name";
            email.placeholder = "your@email.com";
            phone.placeholder = "070-1234567";
            message.placeholder = "Your message...";

            name.id = "inputName";
            email.id = "inputEmail";
            phone.id = "inputPhone";
            message.id = "inputMessage";

            name.name = "Name";
            email.name = "Email";
            phone.name = "Phone";
            message.name = "Message";

            let nameLabel = document.createElement("label");
            let emailLabel = document.createElement("label");
            let phoneLabel = document.createElement("label");
            let messageLabel = document.createElement("label");

            nameLabel.htmlFor = "inputName";
            emailLabel.htmlFor = "inputEmail";
            phoneLabel.htmlFor = "inputPhone";
            messageLabel.htmlFor = "inputMessage";

            nameLabel.innerHTML = "Name:";
            emailLabel.innerHTML = "Email:";
            phoneLabel.innerHTML = "Phone:";
            messageLabel.innerHTML = "Message:";

            let submitButton = document.createElement("button");
            submitButton.type = "submit";
            submitButton.innerHTML = "Send";
            submitButton.className = "btn btn-primary";

            form.appendChild(title);
            
            form.appendChild(nameLabel);
            form.appendChild(name);
            
            form.appendChild(emailLabel);
            form.appendChild(email);

            form.appendChild(phoneLabel);
            form.appendChild(phone);
            
            form.appendChild(messageLabel);
            form.appendChild(message);

            form.appendChild(submitButton);

            // form.onsubmit() ////TODO: fixa gmail API redirect uri...


            
        

        } else {
            if (this.images.length > 0) {
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
            }
    
            
    
            // add additional info text
            for (let i = 0; i < this.info.length; i++) {
                let sectionWrapper = document.createElement("div");
                sectionWrapper.classList.add("section" + (i + 1));
                sectionWrapper.classList.add("section");
                this.wrapper.appendChild(sectionWrapper);
                
                //// add carousels for portfolio
                if (this.info[i].images) {
                    let carousel = document.createElement("div");
                    carousel.id = `indicators${i}`;
                    carousel.className = "carousel slide";
                    carousel.setAttribute("data-ride", "carousel");
                    sectionWrapper.appendChild(carousel);

                    let ol = document.createElement("ol");
                    ol.className = "carousel-indicators";
                    carousel.appendChild(ol);

                    for (let j = 0; j < this.info[i].images.length; j++) {
                        let li = document.createElement("li");
                        li.setAttribute("data-target", `#indicators${i}`);
                        li.setAttribute("data-slide-to", '"' + j + '"');
                        li.setAttribute("data-slide-to", `${j}`);

                        if (j == 0) {
                            li.className = "active";
                        }
                        ol.appendChild(li);
                    }
                    let carouselInner = document.createElement("div");
                    carouselInner.className = "carousel-inner";
                    carousel.appendChild(carouselInner);
                    for (let j = 0; j < this.info[i].images.length; j++) {
                        let carItem = document.createElement("div");
                        if (j == 0) {
                            carItem.className = "carousel-item active";
                        } else {
                            carItem.className = "carousel-item";
                        }
                        carouselInner.appendChild(carItem);
                        let img = document.createElement("img");
                        img.src = this.info[i].images[j].src;
                        img.setAttribute("srcset", `${this.info[i].images[j].srcset}`)
                        img.sizes = this.info[i].sizes;
                        img.className = "d-block";
                        img.alt = this.info[i].images[j].alt;
                        carItem.appendChild(img);
                    }
                    let controlPrev = document.createElement("a");
                    controlPrev.className = "carousel-control-prev";
                    controlPrev.setAttribute("href", `#indicators${i}`)
                    controlPrev.setAttribute("role", "button");
                    controlPrev.setAttribute("data-slide", "prev");
                    carousel.appendChild(controlPrev);

                    let controlNext = document.createElement("a");
                    controlNext.className = "carousel-control-next";
                    controlNext.setAttribute("href", `#indicators${i}`)
                    controlNext.setAttribute("role", "button");
                    controlNext.setAttribute("data-slide", "next");
                    carousel.appendChild(controlNext);

                    let spanPrev = document.createElement("span");
                    spanPrev.className = "carousel-control-prev-icon";
                    spanPrev.setAttribute("aria-hidden", "true");
                    
                    let spanPrevSR = document.createElement("span");
                    spanPrevSR.className = "sr-only";
                    spanPrevSR.innerHTML = "Previous";
                    
                    controlPrev.appendChild(spanPrev);
                    controlPrev.appendChild(spanPrevSR);
                    
                    let spanNext = document.createElement("span");
                    spanNext.className = "carousel-control-next-icon";
                    spanNext.setAttribute("aria-hidden", "true");

                    let spanNextSR = document.createElement("span");
                    spanNextSR.className = "sr-only";
                    spanNextSR.innerHTML = "Next";

                    controlNext.appendChild(spanNext);
                    controlNext.appendChild(spanNextSR);
                    
                }

                let textWrapper = document.createElement("div");
                textWrapper.className = "infoTextWrapper"
                sectionWrapper.appendChild(textWrapper);
                
                let title = document.createElement("h3");
                title.innerHTML = this.info[i].title;
                textWrapper.appendChild(title);
                
                for (let part of this.info[i].text) {
                    let info = document.createElement("p");
                    info.innerHTML = part;
                    textWrapper.appendChild(info);
                }

    
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
