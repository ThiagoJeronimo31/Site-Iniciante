function verificar(){

var data = new Date()
var ano = data.getFullYear()
var idade = document.getElementById("ano")
var idaveri = Number(idade.value) 
var resul = document.getElementById("res")
if(idaveri.langth == 0 || idaveri > ano){
    window.alert("{ERRO:} Verifique os dados e tente novamente")
}
else {
    var sexo = document.getElementsByName("sexo")
    var r = ano - idaveri
    var genero = ''
    var img = document.createElement("img")
    img.setAttribute("id",'ft')
    if(sexo[0].checked){
        genero = 'Homem'
 if(r >=0 && r <10){
    img.setAttribute("src","menino.jpg")
 }
 else if(r<25){
    img.setAttribute("src","aborrecente.jpg")
 }
 else if(r<50){
    img.setAttribute("src","homem-adulto.jpg")
 }
else{
    img.setAttribute("src","idoso.jpg")
}

    
    }
else if(sexo[1].checked){
genero = 'Mulher'
if(r >=0 && r <=10){
    img.setAttribute("src","menina.jpg")
  }
  else if(r<25){
    img.setAttribute("src","adolescente.jpg")
  }
  else if(r<50){
    img.setAttribute("src","mulher-adulta.jpg")
  }
 else{
    img.setAttribute("src","idosa.jpg")
 }
 

}
resul.style.textAlign = 'center'
resul.innerHTML = `Detectamos ${genero} com ${r} anos`
resul.appendChild(img)
}


}