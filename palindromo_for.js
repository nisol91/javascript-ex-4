//funzione per definire se una parola e' palindroma.


function palindromo(parola) {

  // var parolaLower = parola.toLowerCase();


  document.getElementById('scelta').innerHTML = 'Hai inserito la parola ' + parola + '!';
  var strRev = '';//e' come creare un array vuoto
  //NB : la definizione di stringa vuota va messa FUORI dal ciclo! se no ogni volta a ogni giro te la svuota!!!

  for (var i = 0; i < parola.length; i++) {
    console.log(parola[parola.length - 1 - i]);
    strRev = strRev + parola[parola.length - 1 - i];//cosi riempio la nuova stringa
    //si puo scrivere anche: strRev += parola[parola.length - 1 - i];
    console.log(strRev);
  }
    console.log(strRev);

  if (strRev === parola) {
    return 'La parola scelta è palindroma!'
  } else {
    return 'La parola scelta non è palindroma!'
  }


}

var par_pal = palindromo(prompt('Inserisci una parola per verificare se è palindroma.'))

console.log(par_pal);
document.getElementById('result').innerHTML = par_pal;
