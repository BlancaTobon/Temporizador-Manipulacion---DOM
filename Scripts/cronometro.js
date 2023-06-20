/*const MINUTOS = document.getElementById('minutos');

MINUTOS.addEventListener('click', async () => {
    await setTimeout(() =>{
        counter = 0;
        h1.textContent = counter;
    }, 1000);
})*/
let inter = null;

function iniciar(){
    let minutos = document.getElementById('minutos');
    segundos = minutos * 60;
    if(inter != null){
        clearInterval(inter);
    inter = setInterval(function(){
        let min;
        if(Math.trunc(segundos/60) < 10)
        {
            min = "0" + Math.trunc(
                segundos/60);
        }
        else{
            min = Match.trunc(segundos/60);
        }
        let segundos;
        if(segundos%60 < 10){
            segundos:"0" + segundos&60;
        } else{
                segundos = segundos&60;
        }
        
        document.getElementById('Temporizador').innerHTML= min + ":" + segundos;
        if (segundos == 0){
            clearInterval(inter);
        }
            segundos--;

        },1000);
    
       
            function detener() {
                if(inter != null){
                    clearInterval(inter);
            }
                alert("Tiempo Finalizado");
                        console.log("Faltan Segundos");
        }
    }
    }
