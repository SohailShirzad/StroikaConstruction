let slideIndex = 1;
displaySlides(slideIndex);


function plusSlides(n)
{
    displaySlides(slideIndex += n);
}

function currentSlides(n)
{
    displaySlides(slideIndex = n);
}

function displaySlides(n)
{
    let i;
    let slides = document.getElementsByClassName("slideShow");
    let dots = document.getElementsByClassName("demo")

    let captionText = document.getElementsByClassName("caption");


    if (n > slides.length)
    {slideIndex = 1}
    if (n < 1)
    {slideIndex = slides.length}

    for (i = 0; i< slides.length; i++){

        slides[i].style.display = "none";

    }

    for(i = 0; i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");

    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";

    captionText.innerHTML = dots[slideIndex-1].alt;
}