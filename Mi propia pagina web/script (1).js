function palis()
{ var nombre="";
  var resultado="";
  nombre=prompt("Dime una frase: ");
  i=nombre.length-1;
  let arreglo=nombre.split("");
  while(i>=0)
     {
         resultado=resultado+arreglo[i];
         i--;
     }
 alert("tu frase al reves es " + resultado);
}