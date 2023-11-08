function sumaEnRango(a, b) {
    if (a > b) {
      // Intercambia los valores de a y b si a es mayor que b
      [a, b] = [b, a];
    }
  
    let suma = 0;
  
    for (let i = a; i <= b; i++) {
      suma += i;
    }
  
    return suma;
  }
  
  
  const a = 1;
  const b = 5;
  const resultado = sumaEnRango(a, b);
  console.log(`La suma de los números en el rango de ${a} a ${b} es: ${resultado}`);
  