let pantalla  = document.getElementById("pantalla");
let igual = document.getElementById("igual");
let teclas = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operacion");
let borrar1 = document.getElementById("borrar1")
let borrarT = document.getElementById("borrarT")
let operacion = "";
let operando1 = "";
let operando2 = "";


for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener("click", () => {
        if(operacion === "" ) {
            operando1  += teclas[i].innerText;
        }else{
            operando2  += teclas[i].innerText;
        }
        pantalla.innerText += teclas[i].innerText;
    })
}

for (let i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener("click", () =>{
        switch (operaciones[i].innerText) {
            case "+":
                operacion= "suma";
                pantalla.innerText = "+";
                break;
            case "-":
                operacion = "resta";
                pantalla.innerText = "-";
                break;
            case "*":
                operacion = "multiplicacion";
                pantalla.innerText = "*";
                break;
            case "/":
                operacion = "division";
                pantalla.innerText = "/";
                break;
            default:
                console.log("Operacion no valida");
        }
    })
}

igual.addEventListener("click", () =>{
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    switch (operacion) {
        case "suma":
            pantalla.innerText = operando1 + operando2;
            operando1 = parseFloat(pantalla.innerText);
            operando2 = "";
            break;
        case "resta":
            pantalla.innerText = operando1 - operando2;
            operando1 = parseFloat(pantalla.innerText);
            operando2 = "";
            break;
        case "multiplicacion":
            pantalla.innerText = operando1 * operando2;
            operando1 = parseFloat(pantalla.innerText);
            operando2 = "";
            break;
        case "division":
            if(operando2 <= 0){
                console.log("No se puede realizar la operacion");
                pantalla.innerText = "";
                break;
            }else{
                pantalla.innerText = operando1 / operando2;
                operando1 = parseFloat(pantalla.innerText);
                operando2 = "";
                break;
            }
        default:
            console.log("operacion no valida");
            pantalla.innerText = "";
    }
})

borrar1.addEventListener("click", () =>{
    if (operacion === ""){
        operando1 = operando1.slice(0, operando1.length -1)
        pantalla.innerText = operando1;
    }else{
        operando2 = operando2.slice(0, operando2.length -1)
        pantalla.innerText = operando2;
    }
})

borrarT.addEventListener("click", () =>{
    pantalla.innerText= "";
    operando1= "";
    operando2="";
    operacion="";
})