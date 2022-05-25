function displayBanner() {
    banner = document.getElementById("banner")

    let date = new Date()
    ad = date.getDay()

 
    if (ad == 1 || ad == 2) {
        banner.style.display = "block"
    } else {
        banner.style.display = "none"
    }


}

displayBanner()