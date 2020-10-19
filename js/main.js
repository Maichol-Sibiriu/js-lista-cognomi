// esercizio
// lista cognomi
var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Giorgini'];
// chiedi cognome
var user = prompt("qual'e' il tuo cognome??");
// inserire il cognome utente nella lista
list.push(user);
console.log(list);
// stampa lista in ordine alfabetico
list.sort();
console.log(list);
// stampa posizione "umana" del cognome utente nella lista
var index = list.indexOf(user) + 1;
console.log(index);
// stampa a web del cognome e della sua posizione
document.getElementById('surname').innerHTML = "il tuo cognome e' <h1 id = upper>" + user + "</h1> e la tua posizione nella lista e' " + index;
