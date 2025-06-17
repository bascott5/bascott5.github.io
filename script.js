const scrollTop = document.getElementById("scroll-top");

const designContainer = document.getElementById("design-container");
const designModal = document.getElementById("design-modal");
const exitModal = document.getElementById("exit-modal");

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

for (let i = 0; i < designContainer.childElementCount; i++) {
    const design = designContainer.children[i];
    design.addEventListener("click", () => {
        if (window.innerWidth <= 1020) {
            return;
        }

        designModal.children[designModal.childElementCount - 1].src = design.children[0].src;
        designModal.showModal();
    });
}

exitModal.addEventListener("click", () => {
    designModal.close();
});