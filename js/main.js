// esercizio
// lista cognomi
var list = ['bianchi', 'rossi', 'duzioni', 'balsano', 'giorgini'];
// chiedi cognome
var user = prompt("qual'e' il tuo cognome??").toLowerCase();
// inserire il cognome utente nella lista
list.push(user);
console.log(list);
// stampa lista in ordine alfabetico
list.sort();
console.log(list);
// stampa posizione "umana" del cognome utente nella lista
var index = list.indexOf(user) + 1;
console.log(index);
