function insert(num) {
  var numero = document.getElementById('resultados').innerHTML;
  document.getElementById('resultados').innerHTML = numero + num;
} 
function clean(){
    document.getElementById("resultados").innerHTML = " ";
}
function apagarUltimo() {
   var resultados = document.getElementById('resultados').innerHTML;
   document.getElementById('resultados').innerHTML = resultados.substring(0, resultados.length - 1);
}
function calcular(){
    var resultados = document.getElementById('resultados').innerHTML;
    if(resultados){
        document.getElementById('resultados').innerHTML = eval(resultados);
    } else {
        document.getElementById('resultados').innerHTML =  "Digite ;)"
    }
}