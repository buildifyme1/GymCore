// =========================
// NAVBAR SCROLL SHADOW
// =========================

const navbar =
    document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    function () {

        if (window.scrollY > 10) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    }
);


// =========================
// SCROLL REVEAL
// =========================

const revealTargets =
    document.querySelectorAll(
        ".section-header, .feature-card, .pricing-card, .showcase-dashboard, .cta-content"
    );

revealTargets.forEach(function (el) {
    el.classList.add("reveal");
});

const revealObserver =
    new IntersectionObserver(
        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("in-view");

                    observer.unobserve(entry.target);

                }

            });

        },
        { threshold: 0.15 }
    );

revealTargets.forEach(function (el) {
    revealObserver.observe(el);
});


// =========================
// MOBILE MENU
// =========================

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileMenuOverlay =
    document.getElementById("mobileMenuOverlay");

const mobileMenuClose =
    document.getElementById("mobileMenuClose");

const mobileMenuLinks =
    document.querySelectorAll(".mobile-nav-links a, .mobile-nav-button");


function openMobileMenu() {

    mobileMenu.classList.add("active");
    mobileMenuOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeMobileMenu() {

    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");

    document.body.style.overflow = "";

}


menuButton.addEventListener(
    "click",
    openMobileMenu
);


mobileMenuClose.addEventListener(
    "click",
    closeMobileMenu
);


mobileMenuOverlay.addEventListener(
    "click",
    closeMobileMenu
);


mobileMenuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


document.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Escape") {
            closeMobileMenu();
        }

    }
);


// =========================
// DASHBOARD 3D EFFECT
// =========================

const dashboard =
    document.querySelector(".dashboard");


window.addEventListener(
    "mousemove",
    function (event) {

        if (window.innerWidth <= 900) {
            return;
        }


        const x =
            (window.innerWidth / 2 - event.clientX) / 100;


        const y =
            (window.innerHeight / 2 - event.clientY) / 120;


        dashboard.style.transform =
            `
            perspective(1000px)
            rotateY(${x}deg)
            rotateX(${y}deg)
            `;

    }
);


// =========================
// RESET DASHBOARD
// =========================

dashboard.addEventListener(
    "mouseleave",
    function () {

        dashboard.style.transform =
            `
            perspective(1000px)
            rotateY(-4deg)
            `;

    }
);