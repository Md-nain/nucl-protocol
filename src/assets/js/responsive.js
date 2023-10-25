(function(window, document) {
    function resize() {
        var ww = window.innerWidth;
        if (ww > window.screen.width) {
            window.requestAnimationFrame(resize);
            document.documentElement.style.fontSize = "100px";
        } else {
            if (ww > 767) {
                // ww = 750;
                document.documentElement.style.fontSize =
                    (ww * 100) / 1440 + "px";
            } else {
                document.documentElement.style.fontSize =
                    (ww * 100) / 767 + "px";
            }
        }
    }

    resize();

    window.addEventListener("resize", resize);
})(window, document);
