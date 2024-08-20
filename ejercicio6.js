function descuentoViajes (categoria) 
{
  let categoryDescuento;
switch (categoria.toUpperCase ())

{ case 'COSTA':
  return categoryDescuento = 5;
  break
  case 'PANCHIMALCO':
  return categoryDescuento = 10;
  break;
  case 'TRIUNFO':
  return categoryDescuento = 15;
  break;
  default:
  return "Categoría no válida";

}

}

let categoria = 'TRIUNFO'
let impresion =  descuentoViajes(categoria);

console.log(impresion);
