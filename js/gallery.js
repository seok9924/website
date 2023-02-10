function myFunction(imgs) {
    var expandImg = document.getElementById("expandedImg");
    var expandedVideo= document.getElementById("expandingVideo");
    console.log(expandedVideo);
    var imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    expandedVideo.src=imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
  }