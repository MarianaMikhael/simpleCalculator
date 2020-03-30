/*
Podemos considerar esse como um código COESO e organizado, pois as funções
nele declaradas correspondem única e exclusivamente aos seus respectivos objetivos:
"takeValue" armazenar os valores para realizar o cálculo, "clearInput" zerar os valores
contabilizados e "calculateResult" executar as operações desejadas. As funções
não assumem responsabilidades quais não pertencem à sua funcionalidade principal.

Temos exemplificado também, funções de relacionamento fraco (BAIXO NÍVEL DE ACOPLAMENTO),
Visto que "takeValue", "clearInput" e "calculateResult" não possuem interdependência entre
si para serem executadas.
*/

function takeValue(x) {
	document.getElementById('inputwindow').value += x;
}

function clearInput(y) {
	document.getElementById('inputwindow').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('inputwindow').value);
	document.getElementById('inputwindow').value = result;
}