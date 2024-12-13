export class CountdownTimer {
  constructor(duration) {
    this.duration = duration; // Duração total em milissegundos
    this.remainingTime = duration;
    this.timerId = null;
  }

  start(callback) {
    if (this.timerId) {
      console.log("Timer já está em execução.");
      return;
    }

    this.timerId = setInterval(() => {
      if (this.remainingTime <= 0) {
        this.stop();
        callback("Tempo esgotado!");
        return;
      }

      callback(Math.ceil(this.remainingTime / 1000));
      this.remainingTime -= 1000; // Atualiza a cada 1 segundo (1000 ms)
    }, 1000); // Atualiza a cada 1 segundo
  }

  stop() {
    clearInterval(this.timerId);
    this.timerId = null;
    console.log("parou")

  }

  reset() {
    this.stop();
    this.remainingTime = this.duration;
  }
}

// Exemplo de uso:
/*
*/
//const timer = new CountdownTimer(5000); // Contador regressivo de 5 segundos

// Inicia o timer e fornece uma função de callback para exibir o tempo restante
/*
*/
// timer.start(message => {
//   console.log(message);
// });

// Para parar o timer antes que o tempo acabe, você pode chamar
//timer.stop();
// Para redefinir o timer e reiniciar, você pode usar
// timer.reset();
