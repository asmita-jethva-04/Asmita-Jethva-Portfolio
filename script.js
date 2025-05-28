// Sticky Navbar
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 100);
});

// Menu Icon Toggle
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Remove menu icon navbar when click navbar link (scroll)
  menuIcon.classList.remove("fa-x");
  navbar.classList.remove("active");
};

// Scroll Reveal Animation
ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .skills-container, .portfolio-box, .contact form, .experience-container, .education-container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed Text Animation
const typed = new Typed(".multiple-text", {
  strings: [
    "Web Developer",
    "UI/UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "WordPress Expert",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// EmailJS Form Submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const submitBtn = document.getElementById("submit-btn");
    const formMessage = document.getElementById("form-message");
    const originalBtnText = submitBtn.textContent;

    // Change button text to indicate processing
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    // Hide any previous messages
    formMessage.style.display = "none";
    formMessage.className = "form-message";

    // Send the email using EmailJS
    emailjs
      .sendForm("service_62nt70m", "template_di2p9vq", this)
      .then(
        function () {
          // Show success message
          formMessage.textContent =
            "Thank you for your message! I will get back to you soon.";
          formMessage.classList.add("success");
          formMessage.style.display = "block";

          // Reset form
          document.getElementById("contact-form").reset();

          // Scroll to message
          formMessage.scrollIntoView({ behavior: "smooth" });
        },
        function (error) {
          // Show error message
          formMessage.textContent =
            "There was a problem sending your message. Please try again later or contact me directly at asmitajethva04.info@gmail.com";
          formMessage.classList.add("error");
          formMessage.style.display = "block";

          console.error("EmailJS Error:", error);
        }
      )
      .finally(function () {
        // Reset button state
        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;
      });
  });

// Additional animations on scroll
window.addEventListener("scroll", reveal);

function reveal() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Tooltip functionality for tech icons
const techIcons = document.querySelectorAll(".tech-icon");

techIcons.forEach((icon) => {
  icon.addEventListener("mouseover", () => {
    icon.style.transform = "translateY(-1rem)";
    icon.style.boxShadow = "0 0 2rem var(--main-color)";
  });

  icon.addEventListener("mouseout", () => {
    icon.style.transform = "";
    icon.style.boxShadow = "";
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});
