window.addEventListener('DOMContentLoaded',()=>{
function pomodoroTimer(){
    function getTimeFromSeconds(seconds){
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-br',{
            hour12: false,
            timeZone: 'UTC'
        });
    }
    const timer = document.querySelector('.timer');
    let seconds = 0;
    let timers;
    function iniciaRelogio(){
        timers = setInterval(function(){
            seconds++;
            timer.innerHTML = getTimeFromSeconds(seconds);
        }, 1000);
    }
    document.addEventListener('click', (e)=>{
        const el = e.target;
        if(el.classList.contains('reset')){
            clearInterval(timers);
            timer.innerHTML ='00:00:00';
            timer.classList.remove('pausado');
            seconds = 0;
        }
        if(el.classList.contains('iniciar')){
            timer.classList.remove('pausado');
            clearInterval(timers);
            iniciaRelogio();
    
        }if(el.classList.contains('pausar')){
            timer.classList.add('pausado');
            clearInterval(timers);
        }
    });
}
pomodoroTimer();
});
