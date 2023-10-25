export default function webCam(id) {
    document.addEventListener("DOMContentLoaded", () => {
        const $video = document.getElementById(id);
        const constraints = {
            // audio:true,
            video: true
        }


        navigator.mediaDevices
            .getUserMedia(constraints)
            .then((stream) => {
                $video.srcObject = stream;
            })
            .catch(error => {
                $video.insertAdjacentHTML("beforebegin", `<p>Sucedio el siguiente error: ${error} </p>`)
                console.error(error)
            })
    })
}