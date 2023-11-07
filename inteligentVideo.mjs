export default function inteligentVideo(id) {
    const $id = document.getElementById(id);

    const cb = (entries) => {
        entries.forEach(entry => {
            // console.log(entry);
            if (entry.isIntersecting) {
                entry.target.play();
            } else {
                entry.target.pause();
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: 1
    });

    observer.observe($id);

    document.addEventListener('visibilitychange', e => {
        document.visibilityState === 'visible' ? $id.play() : $id.pause();
        // console.log(document.visibilityState)
    })
}