/*
Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
*/

/*
PSEUDOCODICE

-chiedo all'utente di inserire una parola
- SE le lettere a partire dalla prima fino alla lettera di mezzo della parola sono uguali alle lettere a partire dall'ultima fino alla lettera di mezzo
  ° la parola è palindroma
  ALTRIMENTI
  ° la parola non è palindroma

  - chiedo all'utente se sceglie pari o dispari
  - chiedo all'utente di inserire un numero da 1 a 5
  - genero un numero random da 1 a 5 per il computer
  - sommo il numero dell'utente al numero del computer
  - stabilisco se la somma è pari o dispari
  - SE l'utente ha scelto pari e la somma è pari
    ° l'utente vince
    ALTRIMENTI
    ° l'utente perde
*/




const userWordEl = document.getElementById("user-word");
const userButtonEl = document.getElementById("user-button");
const userOutputEl = document.getElementById("user-output");


userButtonEl.addEventListener('click', function() {

  // controllo se la parola inserita sia palindroma e lo stampo nell'elemento di output
  if(palindrome(userWordEl.value)) {

    // in caso non lo sia, lo stampo nell'elemento di output
    userOutputEl.innerText = palindrome(userWordEl.value);

  }
});







// FUNZIONI

function palindrome(str) {
  
  let re = /[^A-Za-z0-9]/g;
  str = str.toLowerCase().replace(re, '');
  let len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
     return "La parola NON è palindroma :(";
    } else {
      
      return "La parola è palindroma :)";
    }
  }
};

