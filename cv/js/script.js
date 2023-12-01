$(document).ready(function() {
    const form = $("form");
    const nextBtn = form.find(".nextBtn");
    const backBtn = form.find(".backBtn");
    const allInput = form.find(".first input");

    nextBtn.on("click", function() {
        if ($(".fname").val() === "" || $(".fname").val() === undefined) {
            $(".fname").addClass('is_border_red');
            $(".fname").focus();
            return false;
        }else{
            $(".fname").removeClass('is_border_red'); 
        }
    });

    backBtn.on("click", function() {
        form.removeClass('secActive');
    });
});
