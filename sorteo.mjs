export default function SorteoRandom(participantes,btn){
    const $participantes = document.querySelectorAll(participantes),
    $btn = document.getElementById(btn);


    document.addEventListener('click', e =>{
        if(e.target === $btn){
            const ganador = Math.round(Math.random() * $participantes.length)
            console.log(`El ganador es = ${$participantes[ganador].textContent}`)
            alert(`El ganador es = ${$participantes[ganador].textContent}`)
        }
    })
}