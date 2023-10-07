export {menuHamburguer , cerrarHamburguer};
function menuHamburguer(img,sel,open){
    img.addEventListener("click", () =>{
        sel.classList.toggle(`${open}`)
    })
}

function cerrarHamburguer(sel,open){
    sel.addEventListener("click", () => {
        sel.classList.toggle(`${open}`)
    })
}