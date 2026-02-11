

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


