//Java script for scroll indicator bar

//executes the function when user scrolls
window.onscroll = function() {scrollprog()};

function scrollprog()
{
    //winscroll holds how many pixels have been scrolled through vertically
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    //height holds total pixels user can scroll through
    //height accounts for height of css elements
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    //scolled holds percent of site scrolled through
    var scrolled = (winScroll / height) * 100;
    //sets bar to new percent value matching percent of page scrolled through
    document.getElementById("bar").style.width = scrolled + "%";
    //removes curved edge of bar when close to edge to make bar flush
    if (scrolled > 99.5) 
    {
        document.getElementById("bar").style.borderTopRightRadius = "0px";
        document.getElementById("bar").style.borderBottomRightRadius = "0px";
    }
    if (scrolled <= 99.5) {
        document.getElementById("bar").style.borderTopRightRadius = "3px";
        document.getElementById("bar").style.borderBottomRightRadius = "3px";
    }
}
