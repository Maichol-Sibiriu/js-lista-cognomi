// esercizio
// lista cognomi
var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// chiedi cognome
var user = prompt("qual'e' il tuo cognome??");
var big = user.charAt(0).toUpperCase() + user.slice(1);
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
// alert + riproposizione del prompt
var alert = 
