document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form containers
    const profileFormContainer = document.getElementById("profile-form-container");
    const buddyFormContainer = document.getElementById("buddy-form-container");
   
    // Get references to the links in the navigation bar
    const profileLink = document.querySelector('[data-bs-target="#profile-form-container"]');
    const buddyLink = document.querySelector('[data-bs-target="#buddy-form-container"]');
    

    // Add click event listeners to show/hide the forms
    profileLink.addEventListener("click", function () {
        profileFormContainer.style.display = "block";
        buddyFormContainer.style.display = "none";
        contactFormContainer.style.display = "none";
    });

    buddyLink.addEventListener("click", function () {
        profileFormContainer.style.display = "none";
        buddyFormContainer.style.display = "block";
        contactFormContainer.style.display = "none";
    });

   
});
