var tl=gsap.timeline()

      tl.from(".intro",{
        y:-30,
        opacity:0,
        duration:1,
        stagger:0.3
      })


      tl.from(".landing-content",{
        y:20,
        opacity:0,
        duration:1.5,
        scale:0.2,
      })
      // Create separate GSAP animations for each scroll section
const scrollAnimation1 = gsap.to(".image-scroll-content1", {
  x: "-45%", // Moves to the left
  duration: 15,
  repeat: -1,
  yoyo: true,
  ease: "none"
});

const scrollAnimation2 = gsap.to(".image-scroll-content2", {
  x: "-22%", // Moves to the right
  duration: 7,
  repeat: -1,
  yoyo: true,
  ease: "none"
});

// Pause animations on hover for the first scroll section
document.querySelectorAll(".image-scroll-content1 .image-container").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    scrollAnimation1.pause(); // Pause only the first scroll section
  });

  card.addEventListener("mouseleave", () => {
    scrollAnimation1.resume(); // Resume only the first scroll section
  });
});

// Pause animations on hover for the second scroll section
document.querySelectorAll(".image-scroll-content2 .image-container").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    scrollAnimation2.pause(); // Pause only the second scroll section
  });

  card.addEventListener("mouseleave", () => {
    scrollAnimation2.resume(); // Resume only the second scroll section
  });
});

// Responsive adjustments
const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  // Adjust animation for smaller screens
  scrollAnimation1.vars.x = "-85%";
  scrollAnimation1.vars.duration = 21;

  scrollAnimation2.vars.x = "-80%";
  scrollAnimation2.vars.duration = 21;
});

mm.add("(min-width: 769px)", () => {
  // Original animation for larger screens
  scrollAnimation1.vars.x = "-45%";
  scrollAnimation1.vars.duration = 15;

  scrollAnimation2.vars.x = "-22%";
  scrollAnimation2.vars.duration = 7;
});
      
      
    
    


    document.addEventListener("DOMContentLoaded", function () {
      // Search functionality
      const searchForm = document.getElementById("searchForm");
      const searchInput = document.getElementById("searchInput");

      searchForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const searchTerm = searchInput.value.trim().toLowerCase(); // Get the search term and convert to lowercase

        // Redirect based on the search term
        const brandPages = {
          "mercedes": "mercedes.html",
          "audi": "audi.html",
          "porsche": "porsche.html",
          "bmw": "bmw.html",
          "bugatti": "bugatti.html"
        };

        if (brandPages[searchTerm]) {
          window.location.href = brandPages[searchTerm];
        } else {
          alert("No matching brand found. Please try again.");
        }
      });

      // Test Drive Form Submission
      const submitButton = document.getElementById("submitButton");
      const testDriveForm = document.getElementById("testDriveForm");
      const modalBody = document.getElementById("modalBody");
      const modalFooter = document.getElementById("modalFooter");

      submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (testDriveForm.checkValidity()) {
          const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            carModel: document.getElementById("carModel").value,
          };

          // Simulate form submission (replace this with an actual API call)
          setTimeout(() => {
            // Replace the form with a confirmation message
            modalBody.innerHTML = ` 
              <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Thank you!</h4>
                <p>Your request has been sent. Our representative will contact you shortly.</p>
                <hr>
                <p class="mb-0">We look forward to seeing you for your test drive!</p>
              </div>
            `;

            // Remove the modal footer (Submit and Close buttons)
            modalFooter.remove();

            // Close the modal after 5 seconds
            setTimeout(() => {
              const modalElement = document.getElementById("testDriveModal");
              const modal = bootstrap.Modal.getInstance(modalElement); // Get the modal instance
              modal.hide(); // Hide the modal
            }, 5000); // Close after 5 seconds
          }, 1000); // Simulate a 1-second delay for the request
        } else {
          // If the form is invalid, trigger the browser's validation messages
          testDriveForm.reportValidity();
        }
      });
    });