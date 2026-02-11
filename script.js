// Wait for the page content to load before running code
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all forms that handle admin actions in the table
    const adminForms = document.querySelectorAll('.admin-action-form');

    // Add an event listener to each form
    adminForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            
            // Prevent the actual submission (no server-side yet)
            e.preventDefault(); 
            
            // Alert user of the action
            alert("Action submitted successfully!");
            
            // Refresh the page back to the same view
            window.location.reload(); 
        });
    });
});