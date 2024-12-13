import React, { useState } from 'react'
import { Title } from '../Titles'
import { Button } from '../Buttons'

interface TimerProps {
  seconds: number
}
const Timer = ({ seconds }: TimerProps) => {

  let audio = new Audio("/Bye.mp3")
  //let timerId: any;
  const [countdown, setCountdown] = useState<any>(0);
  const [started, setStarted] = useState<boolean>(false);


  function onCountdown() {
    setStarted(true);

    let remainingTime = seconds * 1000;

    const timerId = setInterval(() => {

      if (remainingTime <= 0) {
        //audio.play();
        clearInterval(timerId);

        setCountdown("Acabou");
        return;
      }

      setCountdown(remainingTime / 1000)
      console.log(`Tempo restante: ${remainingTime / 1000} ms`);
      remainingTime -= 1000;
    }, 1000);

    if (started) {
      console.log("pare")
      clearInterval(timerId);
    }
  }

  function onStop() {
    //clearInterval(timerId);
    // setCountdown(seconds);
    // setStarted(false);
    //   audio.pause();
    //   audio.currentTime = 0;
  }

  useState(() => {
    setCountdown(seconds);
  })

  return (
    <div className='timer-container'>
      <Title>{countdown}</Title>
      <Button onClick={onCountdown}>
        {/* <Button onClick={started?onStop:onCountdown}> */}
        {started ? "Stop" : "Play"}
      </Button>
    </div>
  )
}

export default Timer