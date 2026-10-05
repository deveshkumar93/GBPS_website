document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    function closeMobileMenu() {
        if (!menuButton || !mobileNav) {
            return;
        }

        mobileNav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
    }

    if (menuButton && mobileNav) {
        menuButton.addEventListener("click", function () {
            const isOpen = mobileNav.classList.toggle("open");

            menuButton.classList.toggle("active", isOpen);
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close menu" : "Open menu"
            );
        });

        mobileNav.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", closeMobileMenu);
        });

        window.addEventListener("resize", function () {
            if (window.innerWidth > 1000) {
                closeMobileMenu();
            }
        });
    }
});
