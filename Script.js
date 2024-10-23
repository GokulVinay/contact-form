document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload
    
    // Display the success message
    document.getElementById('successMessage').classList.remove('hidden');
    
    // Clear the form
    this.reset();
});
