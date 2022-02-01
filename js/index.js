toggler = document.querySelector(".toggler");
sidenav = document.querySelector(".sidenav");
content = document.querySelector(".content");

sidenav_status = true;

toggler.addEventListener("click", function(event) {
    if(sidenav_status) {
        sidenav.classList.add("sidenav-collapse");
        content.classList.add("content-adjust");
        sidenav.classList.remove("sidenav-un-collapse");
        content.classList.remove("content-un-adjust");

        sidenav_status = false;
    }

    else {
        sidenav.classList.add("sidenav-un-collapse");
        content.classList.add("content-un-adjust");
        sidenav.classList.remove("sidenav-collapse");
        content.classList.remove("content-adjust");

        sidenav_status = true;
    }

})