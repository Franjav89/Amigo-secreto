// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];
let amigo;

function agregarAmigo(){

    let amigo = document.getElementById('amigo').value;

    console.log(amigo);

    if(!amigo.length){
       alert('Por favor, inserte un nombre');
    }else{
       amigos.push(amigo);
       console.log(amigos)
       limpiarcaja();
       
    }

}

function sortearAmigo(){
    
if (amigos.length!== 0){

let indice = parseInt(Math.floor(Math.random()*10)+1);
console.log(indice);

amigos[indice];

console.log(amigos[indice]);


}else{

alert('No hay amigos disponibles');
}
}

function limpiarcaja(){
    document.querySelector('#amigo').value ='';
   
}

