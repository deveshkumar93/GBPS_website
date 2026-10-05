/* ============================================================
   FACILITIES DATA — EDIT THIS SECTION ANY TIME
   Each block below is ONE facility shown on the page.
   Fields: kicker, title, text, image, alt.
   Add / remove / reorder / change image & text the same way
   as described at the top of activities.js.
   The "More reasons" bullet list is edited directly in
   facilities.html (the <ul class="bullet-list"> block).
   ============================================================ */

const facilities = [
  {
    kicker: "SAFETY",
    title: "24/7 CCTV recording.",
    text: "The entire campus is covered by high-definition CCTV cameras, monitored round the clock. This keeps students, staff and school property safe at all times.",
    image: "../Assets/Images/School infra.jpg",
    alt: "School building under CCTV surveillance"
  },
  {
    kicker: "TRANSPORT",
    title: "Bus facility with live tracking.",
    text: "School buses pick up and drop students from far-off areas. Parents can view the live location of their child's bus through the school website for a safe, stress-free ride.",
    image: "../Assets/Images/busboarding.jpeg",
    alt: "Students boarding the school bus"
  },
  {
    kicker: "SMART CLASSROOMS",
    title: "Smart, modern classrooms.",
    text: "Classrooms are bright, ventilated and equipped with smart panels. Lessons become more visual and interactive, helping students understand concepts better.",
    image: "../Assets/Images/classroom2.jpeg",
    alt: "A smart classroom at GBPS"
  },
  {
    kicker: "SPORTS",
    title: "A large playground.",
    text: "Our spacious playground gives students room for cricket, football, volleyball and free play. Regular sports help in physical fitness, discipline and team spirit.",
    image: "../Assets/Images/Classroom.jpeg",
    alt: "Students engaged in sports activity"
  },
  {
    kicker: "MESS & CANTEEN",
    title: "Hygiene-first mess facility.",
    text: "The school mess serves fresh, balanced meals prepared in a strictly hygienic kitchen. Meal timings and menus are planned to keep students energised through the day.",
    image: "../Assets/Images/classroom3.jpeg",
    alt: "Students having a meal at school"
  },
  {
    kicker: "PARENT ENGAGEMENT",
    title: "Regular parent-teacher meets.",
    text: "We hold scheduled parent-teacher meetings so progress, behaviour and areas of improvement are discussed openly. Parents stay involved in every child's journey.",
    image: "../Assets/Images/teachers'gp.jpeg",
    alt: "Teachers and parents interacting"
  },
  {
    kicker: "STUDY SUPPORT",
    title: "Preparatory classes for self-study.",
    text: "Supervised preparatory and self-study periods help students revise lessons, finish work and build strong study habits under the guidance of helpful teachers.",
    image: "../Assets/Images/students'gp.jpeg",
    alt: "Students studying during preparatory class"
  },
  {
    kicker: "BASIC AMENITIES",
    title: "Backup power & a safe campus.",
    text: "Power backup keeps classes, labs and offices running without interruption. The campus is well fenced with entry and exit points monitored by staff.",
    image: "../Assets/Images/School infra.jpg",
    alt: "Gyan Bharti campus facilities"
  }
];

/* ===== Render rows + mobile menu (no need to edit below) ===== */

(() => {
  function renderFacilities() {
    const container = document.getElementById("facilityRows");
    if (!container) return;

    container.innerHTML = facilities
      .map((item, i) => {
        const reverse = i % 2 === 1 ? " reverse" : "";
        return `
        <article class="facility-row${reverse}">
          <div class="facility-image">
            <img src="${item.image}" alt="${item.alt}">
            <span>${String(i + 1).padStart(2, "0")}</span>
          </div>
          <div class="facility-copy">
            <p class="kicker">${item.kicker}</p>
            <h2>${item.title}</h2>
            <p>${item.text}</p>
          </div>
        </article>`;
      })
      .join("");
  }

  renderFacilities();

  function initMobileMenu() {
    const menuButton = document.getElementById("menuButton");
    const mobileNav = document.getElementById("mobileNav");

    if (!menuButton || !mobileNav) return;

    menuButton.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuButton.classList.toggle("active", isOpen);
      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
      menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    });

    mobileNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open menu");
      });
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1000) {
        mobileNav.classList.remove("open");
        menuButton.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMobileMenu);
  } else {
    initMobileMenu();
  }
})();
