const icons = document.querySelectorAll(".accordian-icon");

// icons.addEventListener("click", function (e) {
//   console.log("click");
// });

for (let icon of icons) {
  const item = icon.parentElement;

  icon.addEventListener("click", function () {
    item.classList.toggle("open");
  });
}

const papersSection = document.querySelector(".section-papers");
const aboutMeSection = document.querySelector(".section-about-me");
const educationSection = document.querySelector(".section-education");
const skillsSection = document.querySelector(".section-skills");
const projectsSection = document.querySelector(".section-projects");

const navPapers = document.querySelector("#papers");
const navAboutMe = document.querySelector("#about-me");
const navEducation = document.querySelector("#education");
const navSkills = document.querySelector("#skills");
const navProjects = document.querySelector("#projects");

const learnMoreButton = document.querySelector(".btn-learn-more");

learnMoreButton.addEventListener("click", function () {
  const yOffset = -190;
  const y =
    aboutMeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
});

navPapers.addEventListener("click", function () {
  const yOffset = -190;
  const y =
    papersSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // papersSection.scrollIntoView({ behavior: "smooth" });
});

navAboutMe.addEventListener("click", function () {
  const yOffset = -200;
  const y =
    aboutMeSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // aboutMeSection.scrollIntoView({ behavior: "smooth" });
});

navEducation.addEventListener("click", function () {
  const yOffset = -190;
  const y =
    educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // educationSection.scrollIntoView({ behavior: "smooth" });
});

navSkills.addEventListener("click", function () {
  const yOffset = -190;
  const y =
    skillsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // skillsSection.scrollIntoView({ behavior: "smooth" });
});

navProjects.addEventListener("click", function () {
  const yOffset = -190;
  const y =
    projectsSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
  window.scrollTo({ top: y, behavior: "smooth" });
  // projectsSection.scrollIntoView({ behavior: "smooth" });
});

const navBar = document.querySelector(".nav");

const navHeight = navBar.getBoundingClientRect().height;
// console.log(navHeight);
const header = document.querySelector("header");

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  // when 0 % of header is visible, callback function
  threshold: 0,
  // rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

/////////////// paper carousel /////////////////////

const papers = document.querySelectorAll(".paper");
const btnRight = document.querySelector(".btn--right");
const btnLeft = document.querySelector(".btn--left");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;

const maxSlide = papers.length;

// papers.forEach((p, i) => {
//   p.style.transform = `translateX(${100 * i}%)`;
// });

/////////////// Functions /////////////////////

const createDots = function () {
  papers.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot dots__dot--active" data-slide="${i}"></button>`
    );
  });
};
// createDots();

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
// activateDot(curSlide);

const goToPaper = function (paper) {
  papers.forEach((p, i) => {
    p.style.transform = `translateX(${100 * (i - curSlide)}%)`;
  });
  activateDot(curSlide);
};

// goToPaper(0);

// next slide

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToPaper(curSlide);
  // activateDot(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToPaper(curSlide);
  // activateDot(curSlide);
};

const init = function () {
  createDots();
  activateDot(curSlide);
  goToPaper(0);
};
init();
/////////////// Event Handlers /////////////////////

const slides = document.querySelectorAll(".slide");
btnRight.addEventListener("click", nextSlide);

btnLeft.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    prevSlide();
  } else if (e.key === "ArrowRight") {
    nextSlide();
  }
});

dotContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("dots__dot")) {
    curSlide = +e.target.dataset.slide;
    // const { slide } = e.target.dataset;
    goToPaper(curSlide);
    // activateDot(curSlide);
  }
});
