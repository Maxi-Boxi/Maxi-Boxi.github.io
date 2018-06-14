
var detailsOpen = document.getElementsByTagName('details');

var handleMatchMedia = function (mediaQuery) {
        for (var i =0; i < detailsOpen.length; i++)
        if (mediaQuery.matches) {
            detailsOpen[i].removeAttribute("open");
        } else {
            detailsOpen[i].setAttribute("open", "open");
        }
    },
    autoOpen = window.matchMedia('all and (max-width: 790px)');

handleMatchMedia(autoOpen);
autoOpen.addListener(handleMatchMedia);



