document.addEventListener("DOMContentLoaded", () => {
  // ------------------ CAROUSEL ---------------------
  let currentPage = 0;
  const pages = document.querySelectorAll(".class-page");
  const dotsContainer = document.getElementById("carousel-dots");

  pages.forEach((_, i) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".dot");

  window.showPage = function (index) {
    pages.forEach((page, i) => {
      const isActive = i === index;
      page.classList.toggle("active", isActive);
      dots[i].classList.toggle("active", isActive);

      if (isActive) {
        page.classList.remove("tab-slide-in");
        void page.offsetWidth;
        page.classList.add("tab-slide-in");
      }
    });
  };

  window.nextPage = function () {
    currentPage = (currentPage + 1) % pages.length;
    showPage(currentPage);
  };

  window.prevPage = function () {
    currentPage = (currentPage - 1 + pages.length) % pages.length;
    showPage(currentPage);
  };

  showPage(currentPage);

  // ------------------ ABOUT: TOGGLE DETAILS ---------------------
  const intro = document.getElementById("about-intro");
  const details = document.getElementById("about-details");
  const learnMore = document.getElementById("learn-more-btn");
  const back = document.getElementById("back-to-intro");

  // Scroll animation for intro
  const introObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intro.classList.remove("invisible");
          intro.classList.add("visible", "slide-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (intro) introObserver.observe(intro);

  learnMore?.addEventListener("click", () => {
    intro.classList.remove("visible", "slide-in");
    intro.classList.add("invisible");

    setTimeout(() => {
      details.classList.remove("invisible");
      details.classList.add("visible", "slide-in");
    }, 50);
  });

  back?.addEventListener("click", () => {
    details.classList.remove("visible", "slide-in");
    details.classList.add("invisible");

    setTimeout(() => {
      intro.classList.remove("invisible");
      intro.classList.add("visible", "slide-in");
    }, 50);
  });

  // ------------------ PROJECTS: SLIDE IN ---------------------
  const projectsGrid = document.getElementById("projects-grid");

  const projectsObserver = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          projectsGrid.classList.remove("invisible");
          projectsGrid.classList.add("visible", "slide-in");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  if (projectsGrid) projectsObserver.observe(projectsGrid);

  // ------------------ MODAL ---------------------
  const modal = document.getElementById("project-modal");
  const modalContent = document.querySelector(".modal-content");
  const closeBtn = document.getElementById("modal-close");
  const modalTitle = document.getElementById("modal-title");
  const modalMedia = document.getElementById("modal-media");
  const modalDescription = document.getElementById("modal-description");

  function openModal(card) {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const mediaType = card.dataset.media;
    const src = card.dataset.src;

    modalTitle.textContent = title;
    modalDescription.textContent = description;

    modalMedia.innerHTML =
      mediaType === "video"
        ? `<video src="${src}" autoplay muted loop style="width: 100%; border-radius: 10px;"></video>`
        : `<img src="${src}" alt="${title}" style="width: 100%; border-radius: 10px;">`;

    modal.classList.add("show");

    requestAnimationFrame(() => {
      modalContent.classList.remove("slide-up");
      void modalContent.offsetWidth;
      modalContent.classList.add("slide-up");
    });
  }

  function closeModal() {
    modal.classList.remove("show");
    modalContent.classList.remove("slide-up");
  }

  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal(card);
    });
  });

  closeBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
});
