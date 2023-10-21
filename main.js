import { menuHamburguer, cerrarHamburguer } from "./menu.mjs";
import { clock,initAlarm, stopAlarm } from "./reloj.mjs";
import { altkeyboard, moveBall } from "./keyboard.mjs";
import timeout from "./time.mjs";
import { btnScroll } from "./btn-scroll.mjs";
import { themes } from "./themes.mjs";
import {responsive} from "./responsive.mjs";
//Variables DOM
const $main = document.getElementById("main");
const $navSections = document.querySelector(".nav__sct")
const $img = document.getElementById("bars")
//Another Variables
const selOpen = "nav__sct--show",
    bs = [...Array(5).keys()],
    btnSections = ["Reloj", "Detener", "alarma", "detener Alarma"],
    time = `<h3>Reloj Digital y alarma sonora</h3><h3 id="time"></h3>`,
    audio = `<audio><source src="audio/y2mate.com - Si Tu Lo Deseas Puedes Volar feat Cesar Franco.mp3"></audio>`,
    keyboard = `<div class="keyboard"><h3>keyboard</h3></div>`,
    scenery = `<div class="scenary"><div class="scenary__ball"></div></div>`,
    cronometro = `<div class = "cronometro"><h3>cronometro</h3>
    <span class = "time"></span></div>`,
    responsiveJs = `<div><h3>"Responsive JavaScript"</h3></div>`,
    mobileResponsive = `<div>
    <a target="_blank" href="https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=4">"ver video"</a>
    <a target="_blank" href="https://www.google.com/maps/place/Tokio,+Jap%C3%B3n/@35.6834583,139.7442445,9z/data=!4m16!1m9!3m8!1s0x605d1b87f02e57e7:0x2e01618b22571b89!2zVG9raW8sIEphcMOzbg!3b1!8m2!3d35.6764225!4d139.650027!10e5!16zL20vMDdkZms!3m5!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms?authuser=0&entry=ttu">"ver mapa"</a>
    </div>`,
    desktopResponsive = `<div>
    <iframe loading="lazy" src="https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=4" frameborder="0"></iframe>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829628.8703661537!2d139.7442445332905!3d35.68345825149444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2zVG9raW8sIEphcMOzbg!5e0!3m2!1ses-419!2sgt!4v1697839089894!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`;
//Sections

const sectionsBase = bs.map(value => {
    return `Seccion ${value + 1}`
})

const sections = sectionsBase.map((themes) => {
    return `<div class="sections" id="${themes}">
    <h2>${themes}</h2>
    </div>`
}).join(``)

const btn = btnSections.map(sections => {
    return `<input type="button" value="${sections}" id="${sections}">`
}).join('')

const navSections = sectionsBase.map(themes => {
    return `<a class="nav__sections" href="#${themes}">${themes}</a>`
}).join(` `)

$navSections.innerHTML = navSections
$main.innerHTML = sections;
$main.children[0].insertAdjacentHTML('beforeend',time)
$main.children[0].insertAdjacentHTML('beforeend',btn)
$main.children[0].insertAdjacentHTML('beforeend', audio)
$main.children[1].insertAdjacentHTML('beforeend',keyboard)
$main.children[1].insertAdjacentHTML('beforeend',scenery)
$main.children[2].insertAdjacentHTML('beforeend',cronometro)
$main.children[3].insertAdjacentHTML('beforeend',responsiveJs)
// $main.children[3].insertAdjacentHTML('beforeend',responsive("678",desktopResponsive,mobileResponsive))

const insert = (option) =>{
$main.children[3].insertAdjacentHTML('beforeend',option)
}

menuHamburguer($img, $navSections, selOpen)
cerrarHamburguer($navSections, selOpen)
clock(btnSections[0],btnSections[1],'time')
initAlarm(btnSections[2])
stopAlarm(btnSections[3],btnSections[2])

altkeyboard();
moveBall('.scenary__ball','.scenary');
timeout(`.time`,`2024,05,02`);
btnScroll(`.top`);
themes(`.darkMode`, `[themeDark]`);
responsive("678",insert,desktopResponsive,mobileResponsive)