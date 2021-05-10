//alert
//document.writ
//console.log

var numerosecreto = 3
var tentativas = 3

while (tentativas > 0){

  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numerosecreto == chute){
    alert("Acertou") 
   break 
  } else if (chute > numerosecreto){
   alert("O número secreto é menor")
    tentativas = tentativas - 1
  } else if (chute < numerosecreto){
    alert("O número secreto é maior")
    tentativas = tentativas - 1
  } else {
    console.log("Errou. o número secreto era: " + numerosecreto)
  }
}

//while - enquanto acontecer isso, fazer isso. estrutura de laço ou looping