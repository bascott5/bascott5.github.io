const scrollTop = document.getElementById("scroll-top");

document.addEventListener("scroll", () => {
    if (
        (document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20) &&
        window.innerWidth > 1020
    ) {
        scrollTop.style.animation = "appear 100ms linear forwards";
        scrollTop.style.display = "flex";
        return;
    }

    scrollTop.style.display = "none";
});

scrollTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});