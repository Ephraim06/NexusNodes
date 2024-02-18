
  // Wait for the document to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get a reference to your custom-div and the contactModal
    const customDiv = document.querySelector(".custom-div");
    const contactModal = new bootstrap.Modal(document.getElementById("contactModal"));

    // Add a click event listener to open the modal
    customDiv.addEventListener("click", function () {
        contactModal.show();
        console.log("Clicked")
    });
});

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Optional: Add more items to the marquee dynamically
// const marqueeList = document.querySelector('.text-marquee');
// const newItems = ['SALES LAUNCHED •', 'DONT MISS OUT •', 'SALES LAUNCHED •'];

// newItems.forEach(item => {
//   const li = document.createElement('li');
//   li.className = 'moving-text';
//   li.textContent = item;
//   marqueeList.appendChild(li);
// });

function scrollToSection() {
    // Get the element with the ID "about"
    var aboutSection = document.getElementById('about');

    // Check if the element exists
    if (aboutSection) {
        // Use scrollIntoView to scroll to the "about" section
        aboutSection.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolling to section...');
    } else {
        console.log('Section not found');
    }
}


// CIRCLE TEXT
const text = document.querySelector(".text p");

text.innerHTML = text.innerText
	.split("")
	.map(
		(char, i) => `<span style="transform:rotate(${i * 5.8}deg)">${char}</span>`
	)
	.join("");

// Force redirect to first slide
window.location.href="#slide-1";

// All images are from https://unsplash.com/

$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Function to show or hide the scroll button based on scroll position
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var scrollButton = document.getElementById("scroll-btn");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.classList.add("show");
      } else {
        scrollButton.classList.remove("show");
      }
    }

    // Function to scroll to the top when the button is clicked
    function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }
// Spinner Home
  var spinner = function () {
    setTimeout(function () {
        if ($('#spinner').length > 0) {
            $('#spinner').removeClass('show');
        }
    }, 50);
};
spinner();

 $(document).ready(function() {
      $('[data-fancybox="gallery"]').fancybox({
        // Add any Fancybox options or customization here
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  $(document).ready(function() {
      $('[data-fancybox="gallery-mobile"]').fancybox({
        // Add any Fancybox options or customization here
      });
    });

    document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  // Auto wirting text

  const texts = [
    "Click on our Development Experts below to begin a chat on WhatsApp" +", " + "or send an email to sales@albuswaveside.co.za"
  ];

  const outputElement = document.getElementById("output");
  let index = 0;

  function displayText() {
    const currentText = texts[index];
    let charIndex = 0;

    function typeCharacter() {
      if (charIndex < currentText.length) {
        outputElement.textContent += currentText.charAt(charIndex);
        charIndex++;
        setTimeout(typeCharacter, 100); // Adjust typing speed (milliseconds)
      } else {
        // Typing complete, move to the next text
        setTimeout(eraseText, 5000); // Adjust pause before erasing (milliseconds)
      }
    }

    function eraseText() {
      if (outputElement.textContent.length > 0) {
        outputElement.textContent = outputElement.textContent.slice(0, -1);
        setTimeout(eraseText, 500); // Adjust erasing speed (milliseconds)
      } else {
        // Erasing complete, move to the next text
        index = (index + 1) % texts.length;
        setTimeout(displayText, 0); // Adjust pause before typing next text (milliseconds)
      }
    }

    // Start the typing process
    typeCharacter();
  }

  // Initial call to display text
  displayText();


