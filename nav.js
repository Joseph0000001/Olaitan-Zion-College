const navItem = document.getElementsByClassName("nav-item");

function toggle() {
    for (let i = 0; i < navItem.length; i++) {
        if (navItem[i].style.display === "none" || navItem[i].style.display === "") {
            navItem[i].style.display = "block";
        } else {
            navItem[i].style.display = "none";
        }
    }
}
