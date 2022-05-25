let d = new Date();

const banner = document.getElementById("banner");
if (d.getDay() == 2) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}
