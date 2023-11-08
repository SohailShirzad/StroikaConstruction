function headerFunction(){
    var x = document.getElementById("header");
    var y = document.getElementsByTagName("body")[0];

    if (x.className === "headerLevelTwo"){

        x.className += " responsive";
        y.style.overflow = "hidden"

    }

    else{
        x.className = "headerLevelTwo";
        y.style.overflow = "visible"
    }
}