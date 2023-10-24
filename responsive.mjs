const responsive = (breakpoint,fn,option,sOption) => {
    document.addEventListener("DOMContentLoaded", e => {
        if (window.matchMedia(`(min-width : ${breakpoint}px)`).matches) {
            fn(option);
        } else {
            fn(sOption);
        }
    })
}
export {responsive};