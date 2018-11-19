//funzione per definire se una parola e' palindroma.


function palindromo(parola) {

  var parolaLower = parola.toLowerCase();
  var array = parolaLower.split("");
  console.log(array);
  var arrayRev = array.reverse();
  console.log(arrayRev);
  var strRev = arrayRev.join('');
  console.log(strRev);



  document.getElementById('scelta').innerHTML = 'Hai inserito la parola ' + parola + '!';

  if (strRev === parolaLower) {
    return 'La parola scelta è palindroma!'
  } else {
    return 'La parola scelta non è palindroma!'
  }

}

var par_pal = palindromo(prompt('Inserisci una parola per verificare se è palindroma.'))

console.log(par_pal);
document.getElementById('result').innerHTML = par_pal;
