(() => {
  "use strict";
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(link => {
    if (link.getAttribute("href") === current) link.classList.add("active");
  });

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(new Date().getFullYear());
  });

  const revealItems = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add("visible"));
  }

  const backTop = document.querySelector(".back-top");
  if (backTop) {
    window.addEventListener("scroll", () => backTop.classList.toggle("show", window.scrollY > 450), { passive: true });
    backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const search = document.getElementById("resource-search");
  if (search) {
    const cards = [...document.querySelectorAll(".resource-card")];
    const empty = document.getElementById("no-results");
    search.addEventListener("input", () => {
      const query = search.value.trim().toLowerCase();
      let shown = 0;
      cards.forEach(card => {
        const match = card.textContent.toLowerCase().includes(query);
        card.hidden = !match;
        if (match) shown++;
      });
      if (empty) empty.hidden = shown !== 0;
    });
  }

  function prepareMail(form, recipient, statusId, subjectPrefix) {
    const status = document.getElementById(statusId);
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const lines = [];
      for (const [key, value] of data.entries()) {
        if (String(value).trim()) lines.push(`${key}: ${String(value).trim()}`);
      }
      const subjectValue = data.get("subject") || subjectPrefix;
      const body = encodeURIComponent(lines.join("\n"));
      const subject = encodeURIComponent(`${subjectPrefix}: ${subjectValue}`);
      if (status) status.textContent = "Your email app should open with a prepared message. Review it before sending.";
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    });
  }

  const membershipForm = document.getElementById("membership-form");
  if (membershipForm) prepareMail(membershipForm, "ADD-OFFICIAL-EMAIL-HERE", "form-status", "BIT Cyber Shield Club Membership Interest");

  const contactForm = document.getElementById("contact-form");
  if (contactForm) prepareMail(contactForm, "ADD-OFFICIAL-EMAIL-HERE", "contact-status", "BIT Cyber Shield Club Enquiry");
})();