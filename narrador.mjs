const d = document;
export default function voz() {
    const $select = d.getElementById('speech-select'),
    $txtarea = d.getElementById("speech-txt"),
    $btn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

    // console.log(speechMessage)

    let voice = [];

    d.addEventListener("DOMContentLoaded", e =>{
        // console.log(speechSynthesis)
        // console.log(speechSynthesis.getVoices())
        
        window.speechSynthesis.addEventListener("voiceschanged", e =>{
            // console.log(e)
            voice = speechSynthesis.getVoices();
            // console.log(voice)
            voice.forEach((voi) => {
                const $option = d.createElement("option");
                $option.value = voi.name;
                $option.textContent = `${voi.name} - ${voi.lang}`

                $select.appendChild($option);
            })
        })
    })
    d.addEventListener("change", e =>{
        if(e.target === $select){
            speechMessage.voice = voice.find((voi) => voi.name === e.target.value)
        }
        // console.log(speechMessage)
    })
    d.addEventListener("click", e =>{
        if(e.target === $btn){
            speechMessage.text = $txtarea.value;
            speechSynthesis.speak(speechMessage);
        }
    })
}
