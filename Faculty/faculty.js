/* ============================================================
   FACULTY DATA — EDIT THIS SECTION WHEN THE SCHOOL GIVES DATA
   ------------------------------------------------------------
   facultyData  : name of each faculty member + subject(s) taught
   classTeachers: class / section + name of its class teacher
   Just add, remove or edit the entries below. The tables on the
   page will update automatically. Keep the format:
     { name: "Full Name", subject: "Subject(s)" },
     { className: "Class", teacher: "Full Name" },
   Do not delete the square brackets [ ] or the commas between entries.
   ============================================================ */

const facultyData = [
  { name: "Faculty Name 1", subject: "Subject 1" },
  { name: "Faculty Name 2", subject: "Subject 2" },
  { name: "Faculty Name 3", subject: "Subject 3" },
  { name: "Faculty Name 4", subject: "Subject 4" }
];

const classTeachers = [
  { className: "Class 1", teacher: "Class Teacher Name 1" },
  { className: "Class 2", teacher: "Class Teacher Name 2" },
  { className: "Class 3", teacher: "Class Teacher Name 3" }
];

/* ===== Render tables (no need to edit below this line) ===== */

(() => {
  function renderTable(bodyId, rows, columns) {
    const tbody = document.getElementById(bodyId);
    if (!tbody) return;

    tbody.innerHTML = rows
      .map((row, i) => {
        const cells = columns.map((key) => `<td>${row[key]}</td>`).join("");
        return `<tr><td>${i + 1}</td>${cells}</tr>`;
      })
      .join("");
  }

  renderTable("facultyTableBody", facultyData, ["name", "subject"]);
  renderTable("classTeacherTableBody", classTeachers, ["className", "teacher"]);

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
