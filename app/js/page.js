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
        //// intro text
        window.scrollTo(0, 0);
        Website.changeTitle(this.name);
        this.wrapper.className = `pageContent ${this.class}`;
        let introWrapper = document.createElement("div");
        introWrapper.classList.add("introWrapper");
        introWrapper.classList.add(this.class + "Intro");
        let introText = document.createElement("div");
        introText.className = "introText";
        let header = document.createElement("h2");
        header.innerHTML = this.name;

        this.wrapper.appendChild(introWrapper);
        introWrapper.appendChild(introText);
        introWrapper.appendChild(header);

        //// intro text from object
        if (!this.intro[0].title) {
            for (let text of this.intro) {
                let intro = document.createElement("p");
                intro.innerHTML = text;
                intro.className = "intro";
                introText.appendChild(intro);
            }
        } else {///TODO: NÅT E FEL
            ////contact info from object
            let contactWrapper = document.createElement("div");
            introText.appendChild(contactWrapper);
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
                imgWrapper.className = "introImg";
                introWrapper.appendChild(imgWrapper);
                let img = document.createElement("img");
                img.src = this.images[0].src;
                img.alt = this.images[0].alt;
                let imgText = document.createElement("p");
                imgText.innerHTML = this.images[0].text;
                imgText.className = "imgText";
                imgWrapper.appendChild(img);
                imgWrapper.appendChild(imgText);
            }
    
            
    
            //// section info text
            for (let i = 0; i < this.info.length; i++) {
                let sectionWrapper = document.createElement("div");
                sectionWrapper.id = `section${i + 1}`;
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
                    //// carousel page indicators
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
                    //// carousel images
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
                        img.setAttribute("sizes", `${this.info[i].sizes}`);
                        img.className = "d-block";
                        img.alt = this.info[i].images[j].alt;
                        carItem.appendChild(img);
                    }

                    //// carousel controls
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

                    //// control icons
                    let spanPrev = document.createElement("span");
                    spanPrev.className = "carousel-control-prev-icon";
                    spanPrev.setAttribute("aria-hidden", "true");
                    let spanNext = document.createElement("span");
                    spanNext.className = "carousel-control-next-icon";
                    spanNext.setAttribute("aria-hidden", "true");
                    

                    ////screen reader control spans
                    let spanPrevSR = document.createElement("span");
                    spanPrevSR.className = "sr-only";
                    spanPrevSR.innerHTML = "Previous";
                    let spanNextSR = document.createElement("span");
                    spanNextSR.className = "sr-only";
                    spanNextSR.innerHTML = "Next";
                    
                    controlPrev.appendChild(spanPrev);
                    controlPrev.appendChild(spanPrevSR);
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
                let link = document.createElement("a");
                link.href = this.info[i].link;
                link.innerHTML = "Visit page";
                textWrapper.appendChild(link);

    
            }
        }
        let footer = document.createElement("footer");
        this.wrapper.appendChild(footer);
        let upButton = document.createElement("i");
        upButton.type = "button";
        upButton.setAttribute("tabindex", "0");
        upButton.className = "fas fa-angle-double-up fa-4x";
        footer.appendChild(upButton);
        upButton.addEventListener("click", e => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        upButton.addEventListener("keyup", e => {
            e.preventDefault();
            if (e.code == "Enter") {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        })
    }

}