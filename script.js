function load(){
    var msg = document.querySelector('#msg')
    var img = document.querySelector('#imgd')
    var data = new Date()
    var hora = data.getHours() 
    
    msg.innerHTML= `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        msg.innerHTML += ` Bom Dia!`
        img.src = "./img/manha.png"
        document.body.style.background = "#d4c667"
    }else if(hora >= 12 && hora < 18){
        msg.innerHTML += ` Boa Tarde!`
        img.src = "./img/tarde.png"
        document.body.style.background = "#f87c08"
    }else if(hora >= 18){
        msg.innerHTML += ` Boa Noite!`
        img.src = "./img/noite.png"
        document.body.style.background = "#002554"
    }
}
