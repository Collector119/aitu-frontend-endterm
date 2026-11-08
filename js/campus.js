$(document).ready(function () {
    $(".filter-btn").on("click", function () {
        const category = $(this).attr("data-filter");

        $(this).addClass("active");
        $(this).siblings().removeClass("active");

        // All photos are hidden at once, then only the chosen category fades in
        $(".gallery-item").hide();
        if (category === "all") {
            $(".gallery-item").fadeIn(400);
        } else {
            $('.gallery-item[data-category="' + category + '"]').fadeIn(400);
        }
    });
});
