const lista = document.querySelectorAll(".lista");

function activeLink(){
    lista.forEach((item) => item.classList.remove("activa"));
    this.classList.add("activa");
}
lista.forEach((item) => item.addEventListener("click",activeLink));