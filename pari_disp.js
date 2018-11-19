// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.



function pari_disp(numero, numeroCPU, scelta) {
  
  if (numero > 5) {
    return 'Mi dispiace, hai scelto un numero troppo elevato :('
  }

  document.getElementById('scelta1').innerHTML = 'Il giocatore ha scelto il numero ' + numero + ' e ' + 'numeri ' + scelta + '!';
  document.getElementById('scelta2').innerHTML = 'CPU ha scelto il numero ' + numeroCPU + '!';


  if (scelta === 'Pari' && numero % 2 == 0 && numeroCPU % 2 == 0) {
    return 'Pareggio';
  } else if (scelta === 'Pari' && numero % 2 == 0 && numeroCPU % 2 !== 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Pari' && numero % 2 !== 0 && numeroCPU % 2 == 0) {
    return 'Ha vinto CPU';
  } else if (scelta === 'Dispari' && numero % 2 !== 0 && numeroCPU % 2 !== 0) {
    return 'Pareggio';
  } else if (scelta === 'Dispari' && numero % 2 !== 0 && numeroCPU % 2 == 0) {
    return 'Ha vinto il giocatore';
  } else if (scelta === 'Dispari' && numero % 2 == 0 && numeroCPU % 2 !== 0) {
    return 'Ha vinto CPU';
  } else if (scelta === 'Pari' && numero % 2 !== 0 && numeroCPU % 2 !== 0) {
    return 'Perdono entrambi';
  } else if (scelta === 'Dispari' && numero % 2 == 0 && numeroCPU % 2 == 0) {
    return 'Perdono entrambi';
  }



}

var gioco_PD = pari_disp(prompt('Scegli un numero da 1 a 5'), Math.floor(Math.random() * 5) + 1, prompt('Pari o dispari?'));

console.log(gioco_PD);
document.getElementById('result').innerHTML = gioco_PD;
