function openService(evt, service)
{
    var i, tabDescription, tabLinks;
    tabDescription = document.getElementsByClassName("tabDescription");

    for(i = 0; i < tabDescription.length; i++)
    {
        tabDescription[i].style.display = "none";
    
    }

    tabLinks = document.getElementsByClassName("tabLinks")

    for(i = 0; i < tabLinks.length; i++)
    {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    document.getElementById(service).style.display = "block";
    evt.currentTarget.className += " active";

}


document.getElementById("defaultOpen").click();
