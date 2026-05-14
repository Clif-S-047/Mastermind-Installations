
/* =========================
   MOBILE NAVIGATION TOGGLE
========================= */
const navToggle = document.createElement("button");
navToggle.innerHTML = "☰";
navToggle.style.fontSize = "24px";
navToggle.style.background = "none";
navToggle.style.border = "none";
navToggle.style.cursor = "pointer";

const nav = document.querySelector(".nav");
const navLinks = document.querySelector(".nav-links");

if (nav && navLinks) {
  nav.appendChild(navToggle);

  navToggle.addEventListener("click", () => {
    if (navLinks.style.display === "block") {
      navLinks.style.display = "none";
    } else {
      navLinks.style.display = "block";
    }
  });
}


/* =========================
   SMOOTH SCROLL
========================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


/* =========================
   LEAD FORM HANDLING (CRM READY)
========================= */
const leadForm = document.getElementById("leadForm");

if (leadForm) {
  leadForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(leadForm);
    const data = Object.fromEntries(formData);

    console.log("Lead Submitted:", data);

    // 🔹 Replace this with real CRM API (HubSpot, Salesforce, etc.)
    fetch("https://example-crm-endpoint.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(() => {
      alert("✅ Thank you! Your request has been submitted.");
      leadForm.reset();
    })
    .catch(() => {
      alert("⚠️ There was an issue submitting the form.");
    });
  });
}


/* =========================
   SEARCH FUNCTION (SITE SEARCH)
========================= */
const searchInput = document.getElementById("search");
const contentSections = document.querySelectorAll("section");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const query = searchInput.value.toLowerCase();

    contentSections.forEach(section => {
      const text = section.innerText.toLowerCase();

      if (text.includes(query)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
}


/* =========================
   CLICK TRACKING (ANALYTICS)
========================= */
document.querySelectorAll("a, button").forEach(el => {
  el.addEventListener("click", () => {
    const label = el.innerText || el.getAttribute("href");

    if (typeof gtag !== "undefined") {
      gtag("event", "click", {
        event_category: "engagement",
        event_label: label
      });
    }

    console.log("Tracked click:", label);
  });
});


/* =========================
   CALL TRACKING (PHONE CLICKS)
========================= */
document.querySelectorAll('a[href^="tel:"]').forEach(phone => {
  phone.addEventListener("click", () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "phone_call", {
        event_category: "conversion",
        event_label: "Call Button Clicked"
      });
    }
  });
});


/* =========================
   EMAIL TRACKING
========================= */
document.querySelectorAll('a[href^="mailto:"]').forEach(email => {
  email.addEventListener("click", () => {
    if (typeof gtag !== "undefined") {
      gtag("event", "email_click", {
        event_category: "conversion",
        event_label: "Email Clicked"
      });
    }
  });
});


/* =========================
   PERFORMANCE: LAZY LOAD IMAGES
========================= */
const images = document.querySelectorAll("img");

const imgObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      if (img.dataset.src) {
        img.src = img.dataset.src;
      }

      observer.unobserve(img);
    }
  });
});

images.forEach(img => {
  imgObserver.observe(img);
});
``
