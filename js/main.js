let pantalla  = document.getElementById("pantalla");
let igual = document.getElementById("igual");
let teclas = document.getElementsByClassName("tecla");
let operaciones = document.getElementsByClassName("operacion");
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
                break;
            case "-":
                operacion = "resta";
                break;
            case "*":
                operacion = "multiplicacion";
                break;
            case "/":
                operacion = "division";
                break;
            case "%":
                operacion = "porcentaje";
                break;
            case "**":
                operacion = "elevadocuadrado";
                break;
            default:
                console.log("Operacion no valida");
        }
        pantalla.innerText = "";
        console.log(operaciones);
    })
}

igual.addEventListener("click", () =>{
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    switch (operacion) {
        case "suma":
            pantalla.innerText = operando1 + operando2;
            break;
        case "resta":
            pantalla.innerText = operando1 - operando2;
        break;
        case "multiplicacion":
            pantalla.innerText = operando1 * operando2;
        break;
        case "division":
            pantalla.innerText = operando1 / operando2;
        break;
        case "porcentaje":
            pantalla.innerText = operando1 % operando2;
        break;
        case "elevadocuadrado":
            pantalla.innerText = operando1 * operando1;
        break;
        default:
            console.log("operacion no valida");;
    }
})