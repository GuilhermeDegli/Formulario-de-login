const img = document.getElementById("img1")

function spin() {
    img.classList.add("rotate")
}

function stop( ) {

    img.classList.remove("rotate")
}


img.addEventListener("mouseover",spin)
img.addEventListener("mouseleave",stop)

