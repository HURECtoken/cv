$(document).ready(function () {
    const form = $("#FormCv");
    const nextBtn = form.find(".nextBtn");
    const backBtn = form.find(".backBtn");

    nextBtn.on("click", function (event) {
        event.preventDefault();

        if (form.valid()) {
            form.addClass('secActive');
        } else {
            showPopoverErrors(form);
        }
    });

    backBtn.on("click", function (event) {
        event.preventDefault();
        form.removeClass('secActive');
        clearPopoverErrors();
    });

    $('#FormCv').validate({
        rules: {
            surname: {
                required: true
            },
            lname: {
                required: true
            },
            fname: {
                required: true
            },
            birthday: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            gender: {
                required: true
            }
            // Add other rules for additional fields if needed
        },
        messages: {
            surname: {
                required: "оруулна уу!"
            },
            lname: {
                required: "оруулна уу!"
            },
            fname: {
                required: "оруулна уу!"
            },
            birthday: {
                required: "сонгоно уу!"
            },
            email: {
                required: "оруулна уу!",
                email: "Буруу байна!"
            },
            phone: {
                required: "оруулна уу!"
            },
            gender: {
                required: "сонгоно уу!"
            }
            // Add other messages for additional fields if needed
        },
        errorPlacement: function (error, element) {
            // Hide previous popovers
            $('[data-toggle="popover"]').popover('hide');

            // Use Bootstrap Popover to show error messages next to the <i> tag
            var icon = $(element).closest('.input-field').find('i');
            icon.attr("data-content", error.text());

            icon.popover({
                trigger: 'manual',
                placement: 'right',
                container: '.container',
            }).popover('show');
        },
        success: function (label, element) {
            // Hide Bootstrap Popover on success
            var icon = $(element).closest('.input-field').find('i');
            icon.popover('hide');
        }
        
    });
});

