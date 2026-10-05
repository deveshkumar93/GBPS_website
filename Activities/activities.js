/* ============================================================
   ACTIVITIES DATA — EDIT THIS SECTION ANY TIME
   ------------------------------------------------------------
   Each block below is ONE activity shown on the page.
   Fields:
     kicker : small heading above the title (e.g. "SPORTS")
     title  : main heading of the activity
     text   : description paragraph
     image  : path to the image file
     alt    : description of the image (for accessibility)

   HOW TO ADD A NEW ACTIVITY:
     Copy one whole block below (from { to },) and paste it
     inside the list, then change its values.

   HOW TO REMOVE AN ACTIVITY:
     Delete that block's { ... }, including the comma after it.

   HOW TO CHANGE IMAGE / TEXT / ORDER:
     - Change the text between quotes for kicker, title, text.
     - Change the image path (copy your image into
       Assets/Images and set image: "../Assets/Images/yourfile.jpg").
     - To reorder, move the whole block up or down in the list.
     - Image and text automatically alternate sides.

   Keep the commas and brackets exactly as they are.
   ============================================================ */

const activities = [
  {
    kicker: "SPORTS & GAMES",
    title: "Playing with passion.",
    text: "Students take part in cricket, football, kho-kho, badminton and annual sports day. Sports help build teamwork, discipline and a healthy spirit of competition.",
    image: "../Assets/Images/School infra.jpg",
    alt: "School campus where students play sports"
  },
  {
    kicker: "CULTURAL PROGRAMMES",
    title: "Celebrating through culture.",
    text: "Dance, music, drama and school celebrations are a big part of life at GBPS. Students perform on stage during festivals and annual functions, building confidence and creativity.",
    image: "../Assets/Images/students'gp.jpeg",
    alt: "Students performing at a cultural programme"
  },
  {
    kicker: "SCIENCE & EXPLORATION",
    title: "Curious minds at work.",
    text: "Science exhibitions, working models and experiments help students look beyond books. They learn to observe, question and understand how the world works.",
    image: "../Assets/Images/classroom2.jpeg",
    alt: "Students during a science activity"
  },
  {
    kicker: "COMPETITIONS & QUIZZES",
    title: "Learning to win, and to lose well.",
    text: "Debates, elocutions, drawing, essay writing and general knowledge quizzes are organised regularly. These sharpen communication and give students a platform to shine.",
    image: "../Assets/Images/Classroom.jpeg",
    alt: "Students in a classroom competition"
  },
  {
    kicker: "ASSEMBLY & CELEBRATIONS",
    title: "One school, one family.",
    text: "Morning assemblies, national celebrations, Teachers' Day and school anniversaries bring everyone together and teach students about values, gratitude and unity.",
    image: "../Assets/Images/teachers'gp.jpeg",
    alt: "Teachers and students celebrating together"
  },
  {
    kicker: "HOUSE & HOUSE ACTIVITIES",
    title: "Team spirit every day.",
    text: "House colours, inter-house competitions and group activities encourage healthy rivalry, leadership and friendship between students of all classes.",
    image: "../Assets/Images/classroom3.jpeg",
    alt: "Students of a house group together"
  }
];

/* ===== Render activity rows (no need to edit below this line) ===== */

(() => {
  function renderActivities() {
    const container = document.getElementById("activityRows");
    if (!container) return;

    container.innerHTML = activities
      .map((item, i) => {
        const reverse = i % 2 === 1 ? " reverse" : "";
        return `
        <article class="activity-row${reverse}">
          <div class="activity-image">
            <img src="${item.image}" alt="${item.alt}">
            <span>${String(i + 1).padStart(2, "0")}</span>
          </div>
          <div class="activity-copy">
            <p class="kicker">${item.kicker}</p>
            <h2>${item.title}</h2>
            <p>${item.text}</p>
          </div>
        </article>`;
      })
      .join("");
  }

  renderActivities();

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
