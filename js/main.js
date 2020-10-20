// esercizio
// alert + riproposizione del prompt
// loop di richiesta
while (user === " ") {
  alert("devi digitare il cognome!!");
  user = prompt("qual'e' il tuo cognome??").trim();
}
// lista cognomi
var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// chiedi cognome
var user = prompt("qual'e' il tuo cognome??").trim();
var big = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
// inserire il cognome utente nella lista
list.push(big);
console.log(list);
// stampa lista in ordine alfabetico
list.sort();
console.log(list);
// stampa posizione "umana" del cognome utente nella lista
var index = list.indexOf(big) + 1;
console.log(index);
// stampa a web del cognome e della sua posizione
document.getElementById('surname').innerHTML = "il tuo cognome e' " + big + " e la tua posizione nella lista e' " + index;
