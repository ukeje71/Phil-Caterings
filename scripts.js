//Testimonial Data
const testimonials = [
  {
    image: "./assests/1.2-Holly-Sigafoos-Photo.jpg",
    p:"how are you "
  },
  {
    image: "./assests/Testifer3.jpg",
  },
  {
    image: "./assests/1.2-Holly-Sigafoos-Photo.jpg",
  },
  {
    image: "./assests/Testifer3.jpg",
  },
];

//Current Slide
let i = 0;
//Total Slides
let v = testimonials.length;

let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.addEventListener("click", () => {
  i = (v + i + 1) % v;
  displayTestimonial();
});
prevBtn.addEventListener("click", () => {
  i = (v + i - 1) % v;
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
      <img src=${testimonials[i].image} alt="pics">
    `;
};
window.onload = displayTestimonial;
