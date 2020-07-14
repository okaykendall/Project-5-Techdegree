lightbox.option({
    'resizeDuration': 600,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'alwaysShowNavOnTouchDevices': true,
    positionFromTop: 100
   
  });

  $(document).ready(function() {
	$('#search').hideseek();
});

document.getElementById("search").addEventListener("keyup", searchFunction);

function searchFunction() {
    let input = document.getElementById("search").nodeValue.toLowerCase();
    let images = document.querySelectorAll(".gallery a");
    let caption = document.getAttribute("data-title").nodeValue.toLowerCase();
    for (let i = 0; i < images.length; i ++) {
        let data = images[i];
        caption = data.getAttribute("data-title").toLowerCase();
        if (caption.includes(input)) {
            images[i].style.display = "";
        } else {
            images[i].style.display = "none";
        }
    }

}
