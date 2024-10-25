// variable  challenge
let challenge = '30 Days Of JavaScript';

// Imprimir la cadena
console.log(challenge);

// Imprimir longitud
console.log(challenge.length);

// Mayusculas
console.log(challenge.toUpperCase());

// Minúsculas
console.log(challenge.toLowerCase());

// Cortar palabra
console.log(challenge.substring(3));

// Cortar 'Days Of JavaScript'
console.log(challenge.substring(3, 21));

// comprobar
console.log(challenge.includes('Script'));

// Dividir cadena
console.log(challenge.split());

//Espacio
console.log(challenge.split(' '));

// Dividir con comas
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(companies.split(','));

//  "JavaScript" con "Node"
console.log(challenge.replace('JavaScript', 'Node'));

//carácter en el índice 15
console.log(challenge.charAt(15));

// Caracter J
console.log(challenge.charCodeAt(11));

// posicion 'a'
console.log(challenge.indexOf('a'));

// posicion a ultima
console.log(challenge.lastIndexOf('a'));

// trim
let trimmed = ' 30 días de JavaScript ';
console.log(trimmed.trim());

// Comprobar
console.log(challenge.startsWith('30'));

// Comprobar
console.log(challenge.endsWith('JavaScript'));

// match
console.log(challenge.match(/a/gi));

// Concatenar 2
let firstPart = '30 días de';
let secondPart = 'JavaScript';
console.log(firstPart.concat(' ', secondPart));

// Repetir
console.log(challenge.repeat(2));
