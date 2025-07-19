document.addEventListener('DOMContentLoaded', function() {
  // Get all elements with the class 'details-button'
  const detailsButtons = document.querySelectorAll('.details-button');

  // Add click event listener to each details button
  detailsButtons.forEach(button => {
      button.addEventListener('click', function() {
          // Get the target ID from the data-target attribute
          const targetId = this.getAttribute('data-target');
          const detailsDiv = document.getElementById(targetId);

          // Check if the details div exists
          if (detailsDiv) {
              // Toggle the display of the details div
              if (detailsDiv.style.display === 'none' || detailsDiv.style.display === '') {
                  detailsDiv.style.display = 'block'; // Show the details
                  this.textContent = 'بستن جزئیات'; // Change button text to "Close Details"
                  // Optionally, you can scroll to the details section
                  detailsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
              } else {
                  detailsDiv.style.display = 'none'; // Hide the details
                  this.textContent = 'جزئیات بیشتر'; // Change button text back to "More Details"
              }
          }
      });
  });

  // Add placeholder functionality for download buttons
  const downloadButtons = document.querySelectorAll('.download-button');
  downloadButtons.forEach(button => {
      button.addEventListener('click', function() {
          // In a real application, you would trigger a download here
          // For now, we'll just show an alert
          alert('تابع دانلود برای این بازی در حال پیاده‌سازی است!');
      });
  });
});
