document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Navigation Toggle
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when a link is clicked
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });

  // 2. Animated Statistics Counter
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    const target = Number(counter.getAttribute("data-target"));
    const increment = Math.ceil(target / 60);

    const updateCounter = () => {
      const current = Number(counter.innerText);
      if (current < target) {
        counter.innerText = Math.min(current + increment, target);
        setTimeout(updateCounter, 25);
      }
    };
    updateCounter();
  });

  // 3. Notice Board Category Filter
  const filterBtns = document.querySelectorAll(".filter-btn");
  const notices = document.querySelectorAll(".notice-item");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      notices.forEach((notice) => {
        const category = notice.getAttribute("data-category");
        notice.style.display =
          filter === "all" || filter === category ? "block" : "none";
      });
    });
  });

  // 4. Admissions Form Validation & Feedback
  const form = document.getElementById("admissionForm");
  const formMessage = document.getElementById("formMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("studentName").value.trim();
    const grade = document.getElementById("grade").value;
    const email = document.getElementById("parentEmail").value.trim();

    if (!name || !grade || !email.includes("@")) {
      formMessage.style.color = "#dc2626";
      formMessage.textContent = "Please fill in all fields with a valid email address.";
      return;
    }

    formMessage.style.color = "#16a34a";
    formMessage.textContent = `Thank you! Application inquiry for ${name} (${grade}) has been received.`;
    form.reset();
  });
});
