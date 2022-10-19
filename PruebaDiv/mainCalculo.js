function CalcularFibonacci(numero){
    var fib= [];
    fib[0] = 0;
    fib[1] = 1;
    for (var i = 2; i < numero; i++) {
      fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
    }
    
    numeroIntroducido=prompt("Introduzca un numero para generar su Fibonacci")
    while(isNaN(numeroIntroducido)){
        numeroIntroducido=prompt("ERROR, Introduzca un NUMERO para generar su Fibonacci")
    }

    var fibonacci = CalcularFibonacci((numeroIntroducido));
    console.log(fibonacci);