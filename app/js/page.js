class Page {
    constructor(page) {
        this.name = page.name;
        this.content = page.content;
        this.intro = page.content.intro;
        this.info = page.content.info;
        this.images = page.content.images;
        this.wrapper = document.querySelector(".pageContent");
        this.class = page.class;
    }
    loadPage(subCat) {
        while (this.wrapper.firstChild) {
            this.wrapper.removeChild(this.wrapper.lastChild);
        }
        ////change browser title
        if (subCat) {
            Website.changeTitle(`${this.name} / ${subCat.name}`); // portfolio sub category
        } else {
            Website.changeTitle(this.name);
        }

        //// scroll to top of page
        window.scrollTo(0, 0);

        this.wrapper.className = `pageContent ${this.class}`;
        //// intro text
        let introWrapper = document.createElement("div");
        introWrapper.classList.add("introWrapper");
        introWrapper.classList.add(this.class + "Intro");
        let introText = document.createElement("div");
        introText.className = "introText";
        let header = document.createElement("h2");

        if (subCat) {
            header.innerHTML = subCat.name;
        } else {
            header.innerHTML = this.name;
        }

        this.wrapper.appendChild(introWrapper);
        introWrapper.appendChild(header);
        introWrapper.appendChild(introText);

        //// ABOUT PAGE ////
        if (this.class == "about") {
            for (let text of this.intro) {
                //// intro text 
                let intro = document.createElement("p");
                intro.innerHTML = text;
                intro.className = "intro";
                introText.appendChild(intro);
            }
            //// IMAGE 
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

            //// INFO SECTION (NACKADEMIN)
            for (let i = 0; i < this.info.length; i++) {
                let sectionWrapper = document.createElement("section");
                sectionWrapper.id = `section${i + 1}`;
                sectionWrapper.className ="section about";
                this.wrapper.appendChild(sectionWrapper);
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

                

        //// CONTACT PAGE ////
        } else if (this.class == "contact"){
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
            let linkWrapper = document.createElement("div");
            linkWrapper.className = "linkWrapper";
            introWrapper.appendChild(linkWrapper);
            let h4 = document.createElement("h4");
            h4.innerHTML = this.info.text;
            let ul = document.createElement("ul");
            linkWrapper.appendChild(h4);
            linkWrapper.appendChild(ul);
            for (let link of this.info.links) {
                let li = document.createElement("li");
                let i = document.createElement("i");
                let a = document.createElement("a");
                a.innerHTML = link.title;
                a.href = link.href;
                a.target = "blank";
                i.className = link.icon;
                li.appendChild(i);
                li.appendChild(a);
                ul.appendChild(li);
            }
        
        }
        //// PORTFOLIO ////
        if (subCat) {
            for (let text of subCat.intro) {
                let intro = document.createElement("p");
                intro.innerHTML = text;
                intro.className = "intro";
                introText.appendChild(intro);
            }
            
            //// scroll down button
            let downButton = document.createElement("a");
            if (subCat.name != "Code") {
                let icon = document.createElement("i");
                downButton.appendChild(icon);
                downButton.className = "downButton";
                downButton.type = "button";
                downButton.setAttribute("tabindex", "0");
                icon.className = "fas fa-angle-down fa-4x";
    
                downButton.href = "#section1";
                introWrapper.appendChild(downButton);
            }

            //* PORTFOLIO SUB: ART*//
            if (subCat.name == "Art") {
                let sectionWrapper = document.createElement("section");
                sectionWrapper.id = "section1";
                sectionWrapper.className = "section art";
                this.wrapper.appendChild(sectionWrapper);
                for (let obj of subCat.info) {
                    let imgWrapper = document.createElement("div");
                    sectionWrapper.appendChild(imgWrapper);
                    if (obj.image) {
                        let img = document.createElement("img");
                        if (obj.image.srcset) {
                            img.srcset = obj.image.srcset;
                            img.sizes = obj.image.sizes;
                        }
                        img.setAttribute("tabindex", "0");
                        img.src = obj.image.src;
                        img.alt = obj.image.alt;
                        imgWrapper.appendChild(img);
                    } else if (obj.video) {
                        let video = document.createElement("video");
                        let source = document.createElement("source");
                        source.src = obj.video.src;
                        source.alt = obj.video.alt;
                        source.type = "video/mp4";
                        video.innerHTML = "Your browser does not support this type of video."
                        video.setAttribute("tabindex", "0");
                        video.controls = true;
                        video.autoplay = true;
                        video.loop = true;
                        video.appendChild(source);
                        imgWrapper.appendChild(video);
                    }
                }
            //* PORTFOLIO SUB: MUSIC*//
            } else if (subCat.name == "Music") {
                let sectionWrapper = document.createElement("section");
                sectionWrapper.id = "section1";
                sectionWrapper.className = "section music";
                this.wrapper.appendChild(sectionWrapper);
                for (let obj of subCat.info) {
                    
                    //// links to facebook etc
                    if (obj.links) {
                        let linkWrapper = document.createElement("div");
                        introWrapper.insertBefore(linkWrapper, downButton);
                        linkWrapper.className = "linkWrapper";
                        let h4 = document.createElement("h4");
                        h4.innerHTML = obj.text;
                        let ul = document.createElement("ul");
                        linkWrapper.appendChild(h4);
                        linkWrapper.appendChild(ul);
                        for (let link of obj.links) {
                            let li = document.createElement("li");
                            let i = document.createElement("i");
                            let a = document.createElement("a");
                            a.innerHTML = link.title;
                            a.href = link.href;
                            a.target = "blank";
                            i.className = link.icon;
                            li.appendChild(i);
                            li.appendChild(a);
                            ul.appendChild(li);
                        }
                    //// video and player embeds
                    } else if (obj.embed) {
                        let imgWrapper = document.createElement("div");
                        sectionWrapper.appendChild(imgWrapper);
                        
                        // description
                        let h4 = document.createElement("h4");
                        let p = document.createElement("p");
                        h4.innerHTML = obj.title;
                        p.innerHTML = obj.text;
                        imgWrapper.appendChild(h4);
                        imgWrapper.appendChild(p);
                        
                        let span = document.createElement("span");
                        span.innerHTML = obj.embed;
                        imgWrapper.appendChild(span);
                    }
                }
            //* PORTFOLIO SUB: CODE*//
            } else if (subCat.name == "Code") {
                for (let i = 0; i < subCat.info.length; i++) {
                    let sectionWrapper = document.createElement("section");
                    sectionWrapper.id = `section${i + 1}`;
                    sectionWrapper.classList.add("section");
                    this.wrapper.appendChild(sectionWrapper);
    
                    //// Code portfolio carousels                        
                    let carousel = document.createElement("div");
                    carousel.id = `indicators${i}`;
                    carousel.className = "carousel slide";
                    carousel.setAttribute("data-ride", "carousel");
                    sectionWrapper.appendChild(carousel);

                    let ol = document.createElement("ol");
                    ol.className = "carousel-indicators";
                    carousel.appendChild(ol);
                    //// carousel page indicators
                    for (let j = 0; j < subCat.info[i].images.length; j++) {
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
                    for (let j = 0; j < subCat.info[i].images.length; j++) {
                        let carItem = document.createElement("div");
                        if (j == 0) {
                            carItem.className = "carousel-item active";
                        } else {
                            carItem.className = "carousel-item";
                        }
                        carouselInner.appendChild(carItem);
                        let img = document.createElement("img");
                        img.src = subCat.info[i].images[j].src;
                        img.setAttribute("srcset", `${subCat.info[i].images[j].srcset}`)
                        img.setAttribute("sizes", `${subCat.info[i].sizes}`);
                        img.className = "d-block";
                        img.alt = subCat.info[i].images[j].alt;
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
                    
                    
                    //// section info text
                    let textWrapper = document.createElement("div");
                    textWrapper.className = "infoTextWrapper"
                    sectionWrapper.appendChild(textWrapper);
                    
                    let title = document.createElement("h3");
                    title.innerHTML = subCat.info[i].title;
                    textWrapper.appendChild(title);
                    
                    for (let part of subCat.info[i].text) {
                        let info = document.createElement("p");
                        info.innerHTML = part;
                        textWrapper.appendChild(info);
                    }
                    let link = document.createElement("a");
                    link.href = subCat.info[i].link;
                    link.innerHTML = "Visit page";
                    link.target = "blank";
                    textWrapper.appendChild(link);          
                }        
            }
        }

        //// Footer on every page ////
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