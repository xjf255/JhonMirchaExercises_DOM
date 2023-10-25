export default function location(id) {
    const $id = document.getElementById(id);
    document.addEventListener("DOMContentLoaded", e => {
        const success = (pos) => {
            const crd = pos.coords;

            $id.innerHTML = `<h3>Tu posicion actual es:</h3>
            <ul>
            <li>Latitud: ${crd.latitude}</li>
            <li>Longitud: ${crd.longitude}</li>
            <li>Mas o menos ${crd.accuracy} metros</li>
            </ul>`;    
            $id.innerHTML +=`<a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},17z" target="_blank" rel="noopener">ver en google Maps</a>`
        }
        const error=(err) => {
            $id.innerHTML = `Error: ${err.code}: ${err.message}`
        }
        const options={
            enableHighAccuracy:true,
            timeout:5000,
            maximumAge:0,
        };
        navigator.geolocation.getCurrentPosition(success,error,options)   
    })
}