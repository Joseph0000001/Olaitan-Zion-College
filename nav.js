const navItem = document.getElementsByClassName("nav-item");

function toggleNavItems() {
    for (let i = 0; i < navItem.length; i++) {
        navItem[i].classList.toggle("hidden");
    }
}

