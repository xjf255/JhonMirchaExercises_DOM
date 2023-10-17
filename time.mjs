export default timeout;
function timeout(where, init = undefined) {
    if (init === undefined) {
        alert("No ingreso fecha");
    }else {
        if(!document.querySelector(where)) return alert('No existe el elemento donde se insertara el tiempo');
        if(new Date(init).getTime() < new Date().getTime()) return alert('La fecha ingresada no es valida');
        const $where = document.querySelector(where)
        const time = (restTime) =>{
                const years = Math.floor(restTime / (1000 * 60 * 60 * 24 * 365)),
                days = Math.round((restTime - (years * 1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)),
                hrs = Math.floor((restTime - (days * 1000 * 60 * 60 * 24 + (years * 1000 * 60 * 60 * 24 * 365))) / (1000 * 60 * 60)),
                min = Math.floor((restTime - ((hrs * 1000 * 60 * 60) + (days * 1000 * 60 * 60 * 24)+(years * 1000 * 60 * 60 * 24 * 365))) / (1000 * 60)),
                seg = Math.floor((restTime - ((min * 1000 * 60)+(hrs * 1000 * 60 * 60) + (days * 1000 * 60 * 60 * 24) + (years * 1000 * 60 * 60 * 24 * 365))) / (1000))
                return {years,days,hrs,min,seg}
            }
        const timeInterval = setInterval(() => {
            const restTime = new Date(init).getTime() - new Date().getTime()
            const {years,days,hrs,min,seg} = time(restTime)
            $where.innerHTML = `<span>Faltan ${years} años ${days} dias ${hrs} horas ${min} minutos ${seg} segundos para el ${init}</span>`
        }, 1000);
        if(new Date(init).getTime() < new Date().getTime()) {
            $where.innerHTML = `<span>Ya paso la fecha ${init}</span>`;
            clearInterval(timeInterval)
        }
    }
}