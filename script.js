//1 - crie uma função que exiba uma mensagem no console

function diaSemana(){
    console.log("hoje é terça,uhuuu")
}
diaSemana()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console

function oi(nome){
    console.log(`me chamo ${nome} `)
    }
    oi("Joseane")

    
//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console

function sobre(nome,idade,estilomusical){
    console.log(`Meu nome é ${nome} tenho ${idade} anos e gosto de ouvir ${estilomusical}`)
    }
   sobre("Joseane",31,"sertanejo")

   //4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console

function diversão(filme,música){
    console.log(`assista  ${filme} e  escute ${música}`)
}
   diversão("Eu sou a lenda","pais e filhos")


//*Bônus

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function mult(num){
    return num*3
}
console.log(mult(50))

