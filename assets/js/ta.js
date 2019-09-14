var options = {
    textColour: "#202020",
    textHeight: 20,
    depth: 3,
    wheelZoom:false
};

var width = $(window).width();
var height = $(window).height();

window.onload = function() {

    $('canvas').attr({'width':width,'height':height});

    try {
        TagCanvas.Start("skillCanvas", "", options);
        console.log("Start skill animation");
    } catch (e) {
        // something went wrong, hide the canvas container
        console.log("Hide canvas");
        document.getElementById("skillCanvasContainer").style.display = "none";
    }
};

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});