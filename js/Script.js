// Ensure the script runs only after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the form element by its ID
    const form = document.getElementById("contact-form");

    // Check if the form exists; log an error if it doesn't
    if (!form) {
        console.error("Form with ID 'contact-form' not found.");
        return; // Exit if the form is not found
    }

    // Add an event listener to handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        // Retrieve the values of the input fields
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Validate that all fields are filled in
        if (!name || !email || !message) {
            alert("Please fill in all fields before submitting.");
            return; // Exit if any field is empty
        }

        // Display a thank-you message with the user's name
        showThankYouMessage(name);

        // Reset the form fields after submission
        form.reset();
    });

    // Function to display a thank-you message
    function showThankYouMessage(name) {
        // Create a div element for the feedback message
        const feedbackMessage = document.createElement("div");
        feedbackMessage.innerHTML = `<h4>Thank you, ${name}! Your message has been submitted.</h4>`;

        // Apply styling to the feedback message
        feedbackMessage.style.position = "fixed";
        feedbackMessage.style.top = "50%";
        feedbackMessage.style.left = "50%";
        feedbackMessage.style.transform = "translate(-50%, -50%)";
        feedbackMessage.style.color = "black"; // Text color
        feedbackMessage.style.padding = "50px 40px";
        feedbackMessage.style.borderRadius = "5px";
        feedbackMessage.style.fontSize = "20px";
        feedbackMessage.style.textAlign = "center";
        feedbackMessage.style.boxShadow = "0px 4px 6px rgba(106, 167, 217, 0.1)";
        feedbackMessage.style.zIndex = "9999"; // Ensure it overlays other content
        feedbackMessage.style.opacity = "1"; // Ensure initial visibility
        feedbackMessage.style.backgroundColor = "#fff"; // Set background to white to ensure visibility
        feedbackMessage.style.border = "2px solid #aaa"; // Set border for better visibility

        // Log message to check if it is being created
        console.log("Feedback message created:", feedbackMessage);

        // Append the feedback message to the body
        document.body.appendChild(feedbackMessage);

        // Keep the message visible for a longer duration before starting to fade out
        setTimeout(() => {
            feedbackMessage.style.opacity = "0"; // Start fading
            setTimeout(() => {
                feedbackMessage.remove(); // Remove the message from the DOM after fade-out
            }, 1000); // Wait for fade-out to complete before removing
        }, 3000); // Display the message for 3 seconds before fading
    }
});
