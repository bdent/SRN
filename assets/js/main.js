'use strict';

$(document).ready(function () {

    particlesJS.load('particles-js', 'assets/js/particles_config.json');

    $(function () {

        var title = document.title, animSeq = ["|", "|", "|", "|"], animIndex = 0, titleIndex = 0;

        function spinPitch() {

            var loadTitle = title.substring(0, titleIndex);

            if (titleIndex > title.length) {
                animIndex = 0;
                titleIndex = 0;
            }

            if (animIndex > 3) {
                titleIndex++;
                animIndex = 0;
            }

            document.title = loadTitle + animSeq[animIndex];
            animIndex++;

        }

        window.setInterval(spinPitch, 100);

    });

});