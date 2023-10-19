const $ = el => document.querySelector(el)
function btnScroll(btn){
    const $btn = $(btn)
    window.addEventListener("scroll", e =>{
        // console.log(scrollY, document.documentElement.scrollTop)
        if(scrollY > 500){
            $btn.classList.remove("top-hiden")
        }else{
            $btn.classList.add("top-hiden")
        }
    })
}
export {btnScroll};