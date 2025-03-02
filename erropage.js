document.addEventListener('DOMContentLoaded', function () {
    // Search Functionality
    document.getElementById('searchForm').addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the form from submitting the traditional way
  
      const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();
  
      if (searchQuery) {
        // Define valid search terms and their corresponding URLs
        const searchTerms = {
          'bmw': 'bmw.html',
          'audi': 'audi.html',
          'mercedes': 'mercedes.html',
          'bugatti': 'bugatti.html',
          'porsche': 'porsche.html',
          'home': 'index.html',
          'about': 'about.html',
          'catalogue': 'catalouge.html',
        };
  
        // Check if the search query matches any valid term
        if (searchTerms[searchQuery]) {
          window.location.href = searchTerms[searchQuery]; // Redirect to the corresponding page
        } else {
          alert('No results found for your search. Please try again.'); // Show an alert if no match is found
        }
      } else {
        alert('Please enter a search term.'); // Show an alert if the search input is empty
      }
    });
  
    // Book Test Drive Form Submission
    document.getElementById('submitButton').addEventListener('click', function () {
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const carModel = document.getElementById('carModel').value;
  
      // Basic validation
      if (!name || !email || !phone || !carModel) {
        alert('Please fill out all fields in the form.');
        return;
      }
  
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      // Validate phone number format (basic check for 10 digits)
      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
        alert('Please enter a valid 10-digit phone number.');
        return;
      }
  
      // If all validations pass, simulate form submission
      const formData = {
        name: name,
        email: email,
        phone: phone,
        carModel: carModel,
      };
  
      console.log('Form Data Submitted:', formData); // Log the form data to the console (for testing)
      alert('Thank you! Your test drive request has been submitted.');
  
      // Close the modal after submission
      const modal = bootstrap.Modal.getInstance(document.getElementById('testDriveModal'));
      modal.hide();
  
      // Clear the form fields
      document.getElementById('testDriveForm').reset();
    });
  });