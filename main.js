
function orden (arreglo){
    
    const mayoramenor = [...arreglo]; 

    for (let i=0; i<arreglo.length-1; i++){
        for (let j=i+1; j<=arreglo.length-1; j++){
            if (mayoramenor[i] < mayoramenor[j]){
                let guardarvalor = mayoramenor[i];
                mayoramenor[i] = mayoramenor[j];
                mayoramenor [j] = guardarvalor; 
            } //if
        }// for j
    } // for i

    return mayoramenor;

}// function order

const num1 = parseInt(prompt ("Ingresa primer número:"));
const num2 = parseInt (prompt ("Ingresa segundo número:"));
const num3 = parseInt (prompt ("Ingresa tercer número:"));

const num = [num1, num2, num3];

if(num1 == num2 && num2 == num3) {
    console.log ("Todos los números son iguales: " +num1 );
} else {
    const ordenado = orden(num);
    console.log (ordenado);

    console.log (ordenado.reverse());
}
 
/*
//Solución alternativa
let mayor = 0;
let menor = 0;
let medio = 0;
        
for (let i = 0; i < 3; i++){
    let numero = parseInt(prompt ("Ingresa número: "));

    if (numero > mayor){ 
        medio = mayor;
        mayor = numero;
    } else if (numero < menor) {
        medio = menor;
        menor = numero;
    } else {
    medio = numero;
    }
}
        
const ordenado = [mayor, medio, menor]
console.log (ordenado); 
console.log (ordenado.reverse()); 
*/