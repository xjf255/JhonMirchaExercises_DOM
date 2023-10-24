export { URLtester };
// en lugar de pedir esos 5 parametros ubiera necesitado solo 1(#form)
const URLtester = (url, width, height, btnopen, btncerrar) => {
    let windowsURL;
    const $url = document.getElementById(url),
        $width = document.getElementById(width),
        $height = document.getElementById(height);
    document.addEventListener("click", e => {
        if (e.target.matches(`#${btnopen}`)) {
            //si ubiera usado name en los input seria asi === $form.name.value
            windowsURL = open($url.value, "resizeble = true", `innerWidth=${$width.value},innerHeight=${$height.value}`);
            e.preventDefault();
            console.log('test')
            console.log($url.value, $width.value, $height.value)
        }else if(e.target.matches(`#${btncerrar}`)){
            windowsURL.close();
            e.preventDefault();
        }
    })
}
