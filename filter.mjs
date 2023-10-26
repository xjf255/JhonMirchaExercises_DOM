export default function inputFilter(id, galeria) {
    const $id = document.getElementById(id),
        $galeria = document.querySelectorAll(galeria),
        letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'u', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    document.addEventListener("click", e => {
        if (e.target == $id) {
            $id.addEventListener("keyup", e => {
                console.log($id.value)
                $galeria.forEach(element => {
                    if (element.textContent.toLowerCase().includes($id.value.toLowerCase())) {
                        element.classList.remove("hide");
                    } else {
                        element.classList.add("hide");
                    }
                })
            })
        }
    })
}