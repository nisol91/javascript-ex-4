// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.

function random_int_number(min, max) {
  return Math.floor(Math.random() * (max - min +  1) + min);
}


function pari_disp(scelta, numero) {

//per le validazioni e' sempre buona pratica creare un array con tutti i valori che sono validi. se l utente ne inserisce uno che
//non e' nell array dei valori validi, non puo proseguire.
  var valoriValidi = ['Pari', 'Dispari'];

  var check = valoriValidi.includes(scelta);

  if (check === false) {
    alert('errore');
  }

  if (numero > 5) {
    alert ('Mi dispiace, non hai abbastanza dita :(')
  }

  var numeroCPU =  random_int_number(1, 5);

  document.getElementById('scelta1').innerHTML = 'Il giocatore ha scelto il numero ' + numero + ' e ' + scelta + '!';
  document.getElementById('scelta2').innerHTML = 'CPU ha scelto il numero ' + numeroCPU + '!';
  document.getElementById('somma').innerHTML = 'La somma è ' + (numero + numeroCPU) + '!';

 var somma = numero + numeroCPU;

  if (scelta === 'Pari' && (somma) % 2 == 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Pari' && (somma) % 2 !== 0) {
    return 'Ha vinto CPU';
  } else if (scelta === 'Dispari' && (somma) % 2 !== 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Dispari' && (somma) % 2 == 0) {
    return 'Ha vinto CPU';
  } else {
    return 'errore'
  }

}

var gioco_PD = pari_disp(prompt('Pari o Dispari?'), parseInt(prompt('Scegli un numero da 1 a 5')));

console.log(gioco_PD);
document.getElementById('result').innerHTML = gioco_PD;
