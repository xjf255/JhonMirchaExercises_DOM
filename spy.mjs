export default function scrollSpy() {
    const sections = document.querySelectorAll('div[data-scroll-spy]');
    //Callback
    const cb = (entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if (entry.isIntersecting) {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            } else {
                document.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        });
    }
    
    const observer = new IntersectionObserver(cb, {
        // rootMargin: '-250px 0px -250px 0px',
        threshold: [0.5, 0.75]
    });

    sections.forEach(el => {
        observer.observe(el);
        // console.log(observer.observe(el))
    });
}