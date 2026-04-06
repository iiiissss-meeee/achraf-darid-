const form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault(); // Prevents the page from redirecting to Formspree
    
    const data = new FormData(event.target);
    const button = event.target.querySelector('button[type="submit"]');

    // Update button status
    const originalText = button.innerHTML;
    button.innerHTML = "Sending...";
    button.disabled = true;

    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert("Thanks! Your message has been sent successfully.");
            form.reset(); // Clears the form fields
        } else {
            alert("Oops! There was a problem submitting your form.");
        }
    }).catch(error => {
        alert("Error: Please check your internet connection.");
    }).finally(() => {
        // Restore button state
        button.innerHTML = originalText;
        button.disabled = false;
    });
}

form.addEventListener("submit", handleSubmit);