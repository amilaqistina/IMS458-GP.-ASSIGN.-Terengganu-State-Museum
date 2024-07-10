document.addEventListener("DOMContentLoaded", function() {
    function toggleContent(id) {
        var content = document.getElementById(id);
        if (content.style.display === "none" || content.style.display === "") {
            content.style.display = "block";
        } else {
            content.style.display = "none";
        }
    }

    var toggleElements = document.querySelectorAll(".toggle");
    toggleElements.forEach(function(element) {
        element.addEventListener("click", function() {
            var contentId = this.querySelector(".toggle-content").id;
            toggleContent(contentId);
        });
    });
});

    $(document).ready(function(){
        $('.carousel').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        });
    });
