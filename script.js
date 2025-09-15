// document.getElementById("contactForm").addEventListener("submit", function(event) {
//     event.preventDefault(); // Prevent the form from submitting

//     const name = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const message = document.getElementById("message").value;

//     // Here you can add code to send this data to a server or show a success message
//     console.log("Form Submitted:", { name, email, phone, message });

//     // Show a success message (you can replace this with a real submission logic)
//     alert("Thank you for contacting us. We will get back to you shortly!");
// });

// JavaScript for the Carousel

// let slideIndex = 0;

// function showSlides() {
//     let slides = document.querySelectorAll(".slideshow-container");
//     let dots = document.querySelectorAll(".dot");
//     console.log("hi");
//     // Hide all slides
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }

//     // Remove the active class from all dots
//     for (let i = 0; i < dots.length; i++) {
//         dots[i].classList.remove("active");
//     }

//     // Increment slideIndex (wrap around to 0 after last slide)
//     slideIndex++;
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }

//     // Show the current slide and highlight the corresponding dot
//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add("active");
// }

// // Manual Navigation: Move to a specific slide
// function currentSlide(n) {
//     let slides = document.querySelectorAll(".images img");
//     let dots = document.querySelectorAll(".dot");

//     if (n >= slides.length) { 
//         slideIndex = 0; 
//     } else if (n < 0) { 
//         slideIndex = slides.length - 1; 
//     } else { 
//         slideIndex = n;
//     }

//     // Hide all slides and remove active class from all dots
//     for (let i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//         dots[i].classList.remove("active");
//     }

//     // Show the selected slide and highlight the corresponding dot
//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add("active");
// }

// // Manual Navigation: Move next or previous
// function moveSlide(n) {
//     currentSlide(slideIndex + n);
// }

// // Start the slide show automatically
// setInterval(showSlides, 120000); // Change slides every 3 seconds

// // Initial call to display the first slide
// showSlides();

//latest
// let slideIndex = 0;

// // Function to show the current slide and update the dots
// function showSlides() {
//     let slides = document.querySelectorAll(".slideshow-container");
//     let dots = document.querySelectorAll(".dot");
//     console.log(slides);
//     // Hide all slides and remove the active class from all dots
//     slides.forEach((slide, index) => {
//         slide.style.display = "none";
//         dots[index].classList.remove("active");
//     });

//     // Increment slideIndex (wrap around to 0 after the last slide)
//     slideIndex++;
//     if (slideIndex >= slides.length) {
//         slideIndex = 0;
//     }

//     // Show the current slide and highlight the corresponding dot
//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add("active");
// }

// // Function to manually navigate to a specific slide
// function currentSlide(n) {
//     let slides = document.querySelectorAll(".carousel-images img");
//     let dots = document.querySelectorAll(".dot");

//     // If the slide number exceeds the total slides, wrap it around
//     if (n >= slides.length) { 
//         slideIndex = 0; 
//     } else if (n < 0) { 
//         slideIndex = slides.length - 1; 
//     } else { 
//         slideIndex = n;
//     }

//     // Hide all slides and remove active class from all dots
//     slides.forEach((slide, index) => {
//         slide.style.display = "none";
//         dots[index].classList.remove("active");
//     });

//     // Show the selected slide and highlight the corresponding dot
//     slides[slideIndex].style.display = "block";
//     dots[slideIndex].classList.add("active");
// }

// // Function to move the slides (next or previous)
// function moveSlide(n) {
//     currentSlide(slideIndex + n);
// }

// Set up event listeners for the dots (manual navigation)
// #####################################################################
// const dots = document.querySelectorAll(".dot");
// dots.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//         currentSlide(index); // When a dot is clicked, go to the corresponding slide
//     });
// });

// Start the slide show automatically every 3 seconds (3000ms)
// ###################################
// setInterval(showSlides, 6000); // Change slides every 3 seconds

// Initial call to display the first slide
// #################################################
// showSlides();

// function toggleMenu() {
//     const navLinks = document.getElementById("nav-links");
//     navLinks.classList.toggle("active");
// }
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// hamburger.addEventListener("click",()=>{
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// })

// var slideIndex = 0;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName(".image");
//   console.log("hi");
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   slides[slideIndex - 1].style.display = "block";
// }

// document.addEventListener('DOMContentLoaded', () => {
//     let slideIndex = 0;
//     const slides = document.querySelectorAll('.images img');
//     const dots = document.querySelectorAll('.dot');

//     function showSlide(index) {
//         if (index >= slides.length) slideIndex = 0;
//         if (index < 0) slideIndex = slides.length - 1;

//         const offset = -slideIndex * 100;
//         document.querySelector('.carousel-container').style.transform = `translateX(${offset}%)`;

//         dots.forEach((dot, i) => {
//             dot.classList.toggle('active', i === slideIndex);
//         });
//     }

//     function moveSlide(n) {
//         showSlide(slideIndex += n);
//     }

//     function currentSlide(n) {
//         showSlide(slideIndex = n - 1);
//     }

//     // Auto-play the carousel (optional)
//     setInterval(() => {
//         moveSlide(1);
//     }, 5000);
// });
let slideIndex = 0;
let slides = document.getElementsByClassName("mySlide");
let slideInterval;  // We'll store the interval here

function showSlides() {
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Increment slideIndex (wrap around to 0 after the last image)
  if (slideIndex >= slides.length) {
    slideIndex = 0;  // Ensure slideIndex stays within the correct bounds
  }

  // Show the current slide
  if (slideIndex >= 0 && slideIndex < slides.length) {
    slides[slideIndex].style.display = "block";  // Only run this if the slideIndex is valid
  } else {
    console.log('Invalid slide index:', slideIndex);
  }

  // Automatically change the slide every 9 seconds (9000 milliseconds)
  clearTimeout(slideInterval); // Clear any previously set interval
  slideInterval = setTimeout(showSlides, 9000);  // Set a new interval for the next slide
}

// Show the initial slide
showSlides();

// Function to change slide when next/prev buttons are clicked
function plusSlides(n) {
  slideIndex += n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;  // Wrap around to the first slide
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;  // Wrap around to the last slide
  }
  showSlides();  // Re-show the slides after changing the index
}

// Function to change slide when next/prev buttons are clicked
function minusSlides(n) {
  slideIndex -= n;
  if (slideIndex >= slides.length) {
    slideIndex = 0;  // Wrap around to the first slide
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;  // Wrap around to the last slide
  }
  showSlides();  // Re-show the slides after changing the index
}


function toggle() {
  var ele = document.getElementsByClassName('navbar-nav');
  //   const navbarCollapse = document.getElementById('collapsingNavbar');
  // navbarCollapse.classList.toggle('active'); // Toggle the 'active' class
  
  if (ele[0].style.top == '0%') {
    ele[0].style.top = '100%';
    ele[0].style.right = '100%';
  } else {

    ele[0].style.top = '0%';
    ele[0].style.right = '0%';
  }
  const toggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Toggle the 'open' class on the button and navbar collapse
    toggler.classList.toggle('open');
    navbarCollapse.classList.toggle('show');
    
    // Switch the content of the button between hamburger and cross
    if (toggler.classList.contains('open')) {
        toggler.innerHTML = '×';  // Change to cross
    } else {
        toggler.innerHTML = '☰';  // Change back to hamburger
    }
}
// function toggle() {
//     const navbarCollapse = document.getElementById('collapsingNavbar');
//     navbarCollapse.classList.toggle('active'); // Toggle the 'active' class
// }
// Wait for the DOM to load


// Code to color active page
document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll('.navbar-nav .nav-link');  // Select all nav links
  const currentPath = window.location.pathname.split("/").pop();  // Get the current page's file name (e.g., "index.html")

  links.forEach(link => {
    const linkHref = link.getAttribute('href').split("/").pop();  // Get just the file name from the href (e.g., "index.html")
    console.log('Current Path:', currentPath);  // Debugging: Check current page
    console.log('Link Href:', linkHref);        // Debugging: Check link href

    if (linkHref === currentPath) {
      link.classList.add('active');  // Add the active class to the matching link
    } else {
      link.classList.remove('active');  // Remove active class from non-matching links
    }
  });
});
