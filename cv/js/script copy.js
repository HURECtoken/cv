$(document).ready(function() {
    const form = $("form");
    const nextBtn = form.find(".nextBtn");
    const backBtn = form.find(".backBtn");
    const allInput = form.find(".first .required");

    nextBtn.on("click", function() {
        let isValid = true; // Flag to track overall form validity

        form.find(".required").on("focusout", function() {
            // Check if an option other than the default is selected
            if ($(this).val() !== "") {
                $(this).removeClass('is_border_red');
            } else {
                $(this).addClass('is_border_red');
            }
        });
    

        allInput.each(function() {
            if ($(this).val() !== "") {
                $(this).removeClass('is_border_red');
            } else {
                isValid = false; // Mark the form as invalid
                $(this).addClass('is_border_red');
            }
        });
    
        // Check phone number
        if (!isNumeric($("#phoneNumber").val())) {
            $("#phoneNumber").addClass('is_border_red');
            isValid = false; // Mark the form as invalid
        }else{
            $("#phoneNumber").removeClass('is_border_red');
        }

         // Check if the email field is valid
         if (!isValidEmail($("#email").val())) {
            isValid = false;
            $("#email").addClass('is_border_red');
        } else {
            $("#email").removeClass('is_border_red');
        }
    
        // If the form is not valid, prevent it from progressing to the next step
        if (!isValid) {
            form.removeClass('secActive');
            return false;
        }
    
        // If all checks pass, proceed to the next step
        form.addClass('secActive');
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    function isNumeric(str) {
        // Use a regular expression to check if the string contains only numbers
        return /^\d+$/.test(str);
    }
    
    backBtn.on("click", function() {
        form.removeClass('secActive');
    });

    form.on("submit", function(event) {
        // Check if any required field is empty
        const isEmpty = allInput.toArray().some(function(input) {
            return $(input).val() === "";
        });

        if (isEmpty) {
            // Prevent form submission
            event.preventDefault();
            // Add your logic here, such as displaying an error message
            console.log("Please fill in all required fields.");
        } else {
            // Continue with form submission
            console.log("Form submitted successfully.");
        }
    });
});
