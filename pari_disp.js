// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.



function pari_disp(scelta, numero, numeroCPU) {

  if (numero > 5) {
    return 'Mi dispiace, non hai abbastanza dita :('
  }

  document.getElementById('scelta1').innerHTML = 'Il giocatore ha scelto il numero ' + numero + ' e ' + scelta + '!';
  document.getElementById('scelta2').innerHTML = 'CPU ha scelto il numero ' + numeroCPU + '!';
  document.getElementById('somma').innerHTML = 'La somma è ' + (numero + numeroCPU) + '!';



  if (scelta === 'Pari' && (numero + numeroCPU) % 2 == 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Pari' && (numero + numeroCPU) % 2 !== 0) {
    return 'Ha vinto CPU';
  } else if (scelta === 'Dispari' && (numero + numeroCPU) % 2 !== 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Dispari' && (numero + numeroCPU) % 2 == 0) {
    return 'Ha vinto CPU';
  }

}

var gioco_PD = pari_disp(prompt('Pari o Dispari?'), parseInt(prompt('Scegli un numero da 1 a 5')), Math.floor(Math.random() * 5) + 1);

console.log(gioco_PD);
document.getElementById('result').innerHTML = gioco_PD;
