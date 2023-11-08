var slideIndex = 1;

showDivs(slideIndex);

function nextDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    var i;
    var x = document.getElementsByClassName("imgSlides");

    if(n > x.length) {slideIndex = 1}
    if(n < 1) {slideIndex = x.length}
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";

}

//get modal

var modal = document.getElementById("myModal");

//Insert image inside the modal

var img = document.getElementById("imgForModal");

var textForModal = document.getElementById("textForModal");

var modalImg = document.getElementById("img01");


var captionText = document.getElementById("imgCaption");

img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;

}

textForModal.onclick = function(){
    modal.style.display = "block";
    modalImg.src = document.getElementsById("img01")
    captionText.innerHTML = this.alt;

}

// span to close the modal

var span = document.getElementsByClassName("close")[0];

span.onclick = function(){
    modal.style.display = "none";
}


