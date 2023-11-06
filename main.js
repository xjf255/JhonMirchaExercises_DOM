import { menuHamburguer, cerrarHamburguer } from "./menu.mjs";
import { clock, initAlarm, stopAlarm } from "./reloj.mjs";
import { altkeyboard, moveBall } from "./keyboard.mjs";
import timeout from "./time.mjs";
import { btnScroll } from "./btn-scroll.mjs";
import { themes } from "./themes.mjs";
import { responsive } from "./responsive.mjs";
import { URLtester } from "./responsive-tester.mjs";
import userDeviceInfo from "./deteccion-dispositivos.mjs";
import networkStatus from "./red.mjs";
import webCam from "./camara.mjs";
import location from "./geolocation.mjs";
import inputFilter from "./filter.mjs";
import SorteoRandom from "./sorteo.mjs";
import slide from "./slider.mjs";
import scrollSpy from "./spy.mjs";

//Variables DOM
const $main = document.getElementById("main");
const $navSections = document.querySelector(".nav__sct")
const $img = document.getElementById("bars")
//Another Variables

const selOpen = "nav__sct--show",
    titles = ["Reloj Digital y alarma sonora", "Keyboard", "Cronometro", "Responsive JavaScript", "responsive tester", "user device info", 'Deteccion de red', "WebCam", "Geolocalizacion", 
    "Filtro de Busqueda", "Sorteo Digital","Responsive Slider", "Video Interactivo", "Span"],
    bs = [...Array(14).keys()],
    btnSections = ["Reloj", "Detener", "alarma", "detener Alarma"],
    time = `<h3 id="time"></h3>`,
    audio = `<audio><source src="audio/y2mate.com - Si Tu Lo Deseas Puedes Volar feat Cesar Franco.mp3"></audio>`,
    keyboard = `<div class="keyboard"></div>`,
    scenery = `<div class="scenary"><div class="scenary__ball"></div></div>`,
    cronometro = `<div class = "cronometro"><span class = "time"></span></div>`,
    videoInteligent = `<video id="vd" src="video/pexels-mikhail-nilov-6981409 (Original).mp4" loop autoplay loading="Lazy">Video stream not available</video>`,
    responsiveTester = `<form><input type="text" id="url" placeholder="URL" required>
    <input name="width" type="text" id="width" placeholder="Width" required>
    <input type="text" id="height" placeholder="Height" required>
    <input type="submit" id="abrir" value="Enviar">
    <input type="button" id="cerrar" value="cerrar">
    </form>`,
    mobileResponsive = `<div>
    <a target="_blank" href="https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=4">"ver video"</a>
    <a target="_blank" href="https://www.google.com/maps/place/Tokio,+Jap%C3%B3n/@35.6834583,139.7442445,9z/data=!4m16!1m9!3m8!1s0x605d1b87f02e57e7:0x2e01618b22571b89!2zVG9raW8sIEphcMOzbg!3b1!8m2!3d35.6764225!4d139.650027!10e5!16zL20vMDdkZms!3m5!1s0x605d1b87f02e57e7:0x2e01618b22571b89!8m2!3d35.6764225!4d139.650027!16zL20vMDdkZms?authuser=0&entry=ttu">"ver mapa"</a>
    </div>`,
    desktopResponsive = `<div>
    // <iframe loading="lazy" src="https://www.youtube.com/watch?v=5KvlQDYDZwY&list=WL&index=4" frameborder="0"></iframe>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d829628.8703661537!2d139.7442445332905!3d35.68345825149444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2zVG9raW8sIEphcMOzbg!5e0!3m2!1ses-419!2sgt!4v1697839089894!5m2!1ses-419!2sgt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>`,
    devices = `<div id="user-device"></div>`,
    red = `<div id="network"></div>`,
    cam = `<video id="webcam" controls autoplay>Video stream not available</video>`,
    geo = `<sections id="location"></sections>`,
    filter = `<form id="filter">
    <input type="search" id="filter__buscador" placeholder="Filtro de busqueda" required>
    </form>`,
    galery = `<div id="galeria" class="galeria">
    <figure class="galeria__img">
    <img src="img/1.jpg" alt="Imagen 1" loading="Lazy">
    <figcaption class="galeria__description">City</figcaption>
    </figure>
    <figure class="galeria__img">
    <img src="img/2.jpg" alt="Imagen 2" loading="Lazy">
    <figcaption class="galeria__description">Town</figcaption>
    </figure>
    <figure class="galeria__img">
    <img src="img/3.jpg" alt="Imagen 3" loading="Lazy">
    <figcaption class="galeria__description">Fruts</figcaption>
    </figure>
    <figure class="galeria__img">
    <img src="img/4.jpg" alt="Imagen 4" loading="Lazy">
    <figcaption class="galeria__description">Clim</figcaption>
    </figure>
    <figure class="galeria__img">
    <img src="img/5.jpg" alt="Imagen 5" loading="Lazy">
    <figcaption class="galeria__description">Tech</figcaption>
    </figure>
    <figure class="galeria__img">
    <img src="img/6.jpg" alt="Imagen 6" loading="Lazy">
    <figcaption class="galeria__description">People</figcaption>
    </figure></div>`,
    lenguajes = ['Java', 'C++', 'PHP', 'C#', 'Python', 'JavaScript', 'Ruby', 'TypeScript', 'Dart', 'Go', 'Swift', 'Kotlin', 'TypeScript'],
    carusel=`<div id="slider" class="slider">
    <div class="slider-slides">
    <figure class="slider-slide active">
    <img src="img/1.jpg" alt="Imagen 1">
    </figure>
    <figure class="slider-slide">
    <figcaption class="galeria__description">Town</figcaption>
    </figure>
    <figure class="slider-slide">
    <img src="img/3.jpg" alt="Imagen 3">
    </figure>
    <figure class="slider-slide">
    <figcaption class="galeria__description">Clim</figcaption>
    </figure>
    </div>
    <section class="slider-btns">
    <a href="#" class="slider-btn slider-btn--left">&lt;</a>
    <a href="#" class="slider-btn slider-btn--right">&gt;</a>
    </section>
    </figure></div>`;
//Sections

const sectionsBase = bs.map(value => {
    return `Seccion ${value + 1}`
})

const sections = sectionsBase.map((themes, index) => {
    // console.log(titles[index])
    return `<div class="sections" id="${themes}" data-scroll-spy>
    <h2>${titles[index]}</h2>
    </div>`
}).join(``)

const btn = btnSections.map(sections => {
    return `<input type="button" value="${sections}" id="${sections}">`
}).join('')

const navSections = sectionsBase.map((themes, index) => {
    return `<a class="nav__sections" href="#${themes}" data-scroll-spy>${titles[index]}</a>`
}).join(` `)

const sorteo = lenguajes.map(lenguaje => {
    return `<li class="lenguajes">${lenguaje}</li>`
}).join(``)

const sectionsSorteo = `<section id="sorteo" class="sorteo"><ul>${sorteo}</ul>
<input type="button" value="Sortear" id="sortear">
</section>`;

$navSections.innerHTML = navSections
$main.innerHTML = sections;
$main.children[0].insertAdjacentHTML('beforeend', time)
$main.children[0].insertAdjacentHTML('beforeend', btn)
$main.children[0].insertAdjacentHTML('beforeend', audio)
$main.children[1].insertAdjacentHTML('beforeend', keyboard)
$main.children[1].insertAdjacentHTML('beforeend', scenery)
// $main.children[3].insertAdjacentHTML('beforeend',responsive("678",desktopResponsive,mobileResponsive))
$main.children[2].insertAdjacentHTML('beforeend', cronometro)
$main.children[4].insertAdjacentHTML('beforeend', responsiveTester)
$main.children[5].insertAdjacentHTML('beforeend', devices)
$main.children[6].insertAdjacentHTML('beforeend', red)
$main.children[7].insertAdjacentHTML('beforeend', cam)
$main.children[8].insertAdjacentHTML('beforeend', geo)
$main.children[9].insertAdjacentHTML('beforeend', filter)
$main.children[9].insertAdjacentHTML('beforeend', galery)
$main.children[10].insertAdjacentHTML('beforeend', sectionsSorteo)
$main.children[11].insertAdjacentHTML('beforeend', carusel)
$main.children[12].insertAdjacentHTML('beforeend', videoInteligent)




const insert = (option) => {
    $main.children[3].insertAdjacentHTML('beforeend', option)
}

menuHamburguer($img, $navSections, selOpen)
cerrarHamburguer($navSections, selOpen)
clock(btnSections[0], btnSections[1], 'time')
initAlarm(btnSections[2])
stopAlarm(btnSections[3], btnSections[2])

altkeyboard();
moveBall('.scenary__ball', '.scenary');
timeout(`.time`, `2024,05,02`);
btnScroll(`.top`);
themes(`.darkMode`, `[themeDark]`);
responsive("678", insert, desktopResponsive, mobileResponsive)
URLtester(`url`, `width`, `height`, `abrir`, `cerrar`)
userDeviceInfo("user-device")
networkStatus()
webCam("webcam")
location('location')
inputFilter("filter__buscador", ".galeria__img")
SorteoRandom(".lenguajes", "sortear")
slide();
scrollSpy();