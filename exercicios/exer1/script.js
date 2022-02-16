function carregar(){

var msg = window.document.getElementById("msg")
var img = window.document.getElementById("ft")
var dat = new Date()
var hora = dat.getHours()

msg.innerHTML = `Agora são nesse exato momento ${hora} horas`
  if(hora >= 6 && hora < 12){
    img.src = "manha.jpg"
    document.body.style.background = "#ffb350"
  }
  else if(hora >= 12 && hora <=18 ){
    img.src = "tarde.jpg"
    document.body.style.background = "#cf872e"
  }
  else {
    img.src = "noite.jpg"
    document.body.style.background = "#7d677e"
  }



}