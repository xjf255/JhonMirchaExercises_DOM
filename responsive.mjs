const responsive = (breakpoint,fn,option,sOption) => {
    document.addEventListener("DOMContentLoaded", e => {
        if (window.matchMedia(`(min-width : ${breakpoint}px)`).matches) {
            console.log("test")
            fn(option);
        } else {
            console.log("test2")
            fn(sOption);
        }
    })
}
export {responsive};