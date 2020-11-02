document.addEventListener("DOMContentLoaded", function(e) {
    let menu_button = document.querySelector(".menu_button");
    let menu = document.querySelector(".menu");
    var ul = document.querySelector(".menu_list");
    menu_button.addEventListener("click", function(e) {
        if (menu.classList.contains("closed")) {
            menu_button.innerHTML = "X";
            addMenuItems();
        } else {
            menu_button.innerHTML = "|||";
            while (ul.firstChild) {
                ul.removeChild(ul.lastChild);
            }
        }
        menu.classList.toggle("closed");
    })
    function addMenuItems() {
        for (let item of menu_items) {
            let li = document.createElement("li");
            let a = document.createElement("a");
            a.innerHTML = item.name;
            a.href = item.page;
            ul.appendChild(li);
            li.appendChild(a);
        }
    }
})