document.addEventListener("DOMContentLoaded", function() {
    var homeBtn = document.getElementById("homeBtn");

    homeBtn.addEventListener("click", function(event) {
        event.preventDefault();
        scrollToTop(1000);
    });

    function scrollToTop(duration) {
        var start = window.pageYOffset;
        var startTime = performance.now();

        function scrollAnimation(currentTime) {
            var timeElapsed = currentTime - startTime;
            var run = easeInOutCubic(timeElapsed, start, -start, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) {
                requestAnimationFrame(scrollAnimation);
            }
        }

        function easeInOutCubic(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t * t + b;
            t -= 2;
            return c / 2 * (t * t * t + 2) + b;
        }

        requestAnimationFrame(scrollAnimation);
    }
});
