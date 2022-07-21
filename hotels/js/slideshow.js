var myIndex = 0;

temples();

function temples() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    } 
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    setTimeout(temples, 2000); 
}