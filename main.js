import { menuHamburguer, cerrarHamburguer } from "./menu.mjs";
import { clock,initAlarm, stopAlarm } from "./reloj.mjs";
//Variables DOM
const $main = document.getElementById("main");
const $navSections = document.querySelector(".nav__sct")
const $img = document.getElementById("bars")
//Another Variables
const selOpen = "nav__sct--show",
    bs = [...Array(5).keys()],
    btnSections = ["Reloj", "Detener", "alarma", "detener Alarma"],
    time = `<h3>Reloj Digital y alarma sonora</h3>
    <h3 id="time"></h3>`,
    audio = `<audio>
    <source src="audio/y2mate.com - Si Tu Lo Deseas Puedes Volar feat Cesar Franco.mp3"></audio>`

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


menuHamburguer($img, $navSections, selOpen)
cerrarHamburguer($navSections, selOpen)
clock(btnSections[0],btnSections[1],'time')
initAlarm(btnSections[2],$main.children[0])
stopAlarm(btnSections[3],btnSections[2])

