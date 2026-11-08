$(document).ready(function () {
    $("#faq .faq-question").on("click", function () {
        const item = $(this).closest(".faq-item");

        // Only one answer stays open: the other questions are closed first
        item.siblings().removeClass("open");
        item.siblings().find(".faq-answer").slideUp();

        item.toggleClass("open");
        $(this).next(".faq-answer").slideToggle();
    });
});
