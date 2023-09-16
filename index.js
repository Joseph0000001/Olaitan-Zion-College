const navItem = document.getElementsByClassName("nav-item");

     function toggle() {
        for (let i = 0; i < navItem.length; i+=1)
        if (navItem[i].style.display = "none") {
            navItem[i].style.display = "block"
        }
     }