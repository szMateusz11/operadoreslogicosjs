var num1, num2, res;
num1 = prompt('Digite um número');
num1 = parseInt(num1);
num2 = prompt('Digite outro número');
num2 = parseInt(num2);

document.write('Mateus Dos Santos Beserra, RA: 420106055<br>');
document.write('Números digitados:<br>num1: ' + num1 + '<br> num2: ' + num2 + '<hr>'
);

res = num1 == num2;
document.write('Igualdade: ' + res + '<br>');

res = num1 === num2;
document.write('Identico: ' + res + '<br>');

res = num1 > num2;
document.write('Maior: ' + res + '<br>');

res = num1 < num2;
document.write('Menor: ' + res + '<br>');

res = num1 >= num2;
document.write('Maior ou igual: ' + res + '<br>');

res = num1 <= num2;
document.write('Menor ou igual: ' + res + '<br>');
