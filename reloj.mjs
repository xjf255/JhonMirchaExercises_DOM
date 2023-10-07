export { clock, initAlarm, stopAlarm };


function clock(btn, btnEnd, clock) {
    let clocktempo;
    const $clock = document.getElementById(clock)
    document.addEventListener("click", e => {
        if (e.target.matches(`#${btn}`)) {
            clocktempo = setInterval(() => {
                let clockHours = new Date().toLocaleTimeString();
                $clock.innerHTML = `<h3>${clockHours}</h3>`
            }, 1000);
            e.target.disabled = true;
        }
        if (e.target.matches(`#${btnEnd}`)) {
            clearInterval(clocktempo)
            document.getElementById(btn).disabled = false;
            $clock.innerHTML = null
        }
    })
}

function initAlarm(btn) {
    const $audio = document.querySelector("audio")
    const $btn = document.getElementById(btn)
    $btn.addEventListener('click', () => {
        $audio.play();
        $btn.disabled = true;
    })
}
function stopAlarm(btn, abtn) {
    const $audio = document.querySelector("audio")
    const $btn = document.getElementById(btn)
    const $otherBtn = document.getElementById(abtn)
    $btn.addEventListener("click", () => {
        $otherBtn.disabled = false;
        $audio.pause();
        $audio.currenTime = 0 ;
    })
}
