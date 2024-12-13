import { useEffect, useState } from 'react';
import { IconButton } from '../components/Buttons';
import { Title } from '../components/Titles';
import PlayerBlock from '../components/PlayerBlock';
import { Plus, Share, ShareNetwork } from "@phosphor-icons/react";
import { Button } from '../components/Buttons';
function Home() {

  const [players, setPlayers] = useState<any[]>([]);
  const [nextPlayer, setNextPlayer] = useState<number>(1);


  const shareData = {
    title: "Scorii",
    text: "Sistema definitivo de pontuação de board games.",
    url: " https://scorii.netlify.app/any",
  };
  const onShare = () => {
    // if (navigator.share && navigator.canShare(shareData)) {
    navigator.share(shareData)
    // }
  }
  const addNewPlayer = () => {
    let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
    if (lPlayers.length === 0) {
      localStorage.setItem('players', JSON.stringify([{ player: `Player ${nextPlayer}`, score: 0 }]))
    } else {
      localStorage.setItem('players', JSON.stringify([...lPlayers, { player: `Player ${nextPlayer}`, score: 0 }]))
    }

    verifyLocalStorage()
  }

  const verifyLocalStorage = () => {
    if (!localStorage.getItem('players')) {
      localStorage.setItem('players', JSON.stringify(players))
      localStorage.setItem('playerCount', JSON.stringify(players))
    } else {
      let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
      setPlayers(lPlayers)
      setNextPlayer(lPlayers.length + 1)
    }
  }

  function resetScore(position: number, item: any) {
    let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
    lPlayers[position].score = 0;
    localStorage.setItem('players', JSON.stringify(lPlayers))
    verifyLocalStorage();

  }

  function deletePlayer(position: number, item: any) {
    let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
    lPlayers.splice(position, 1)
    localStorage.setItem('players', JSON.stringify(lPlayers))
    verifyLocalStorage();

  }

  function updateScore(position: number, item: any, value: number) {
    let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
    lPlayers[position].score = lPlayers[position].score + value;
    localStorage.setItem('players', JSON.stringify(lPlayers))
    verifyLocalStorage();
  }
  function updateName(position: number, item: any, value: string) {
    console.log(value);
    let lPlayers = JSON.parse(localStorage.getItem('players') || '{}');
    lPlayers[position].player = value;
    localStorage.setItem('players', JSON.stringify(lPlayers))
    verifyLocalStorage();
  }

  useEffect(() => {
    verifyLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [''])


  return (
    <div className="home-container">
      <div className="home-container_header">
        <Title size='big'> GAME SCORE </Title>
        <div className="home-container_button-group">
          <IconButton onClick={addNewPlayer}>
            <Plus color='#FFFFFF' size={20} />
            New Player
          </IconButton>
          <IconButton onClick={onShare}>
            <ShareNetwork color='#FFFFFF' size={20} />
          </IconButton>
        </div>
      </div>
      <div className='players-container'>
        {players.map((item, index) => (
          <PlayerBlock
            key={index}
            position={index}
            player={item}
            updateScore={updateScore}
            resetScore={resetScore}
            deletePlayer={deletePlayer}
            updateName={updateName}
            stylesGame={Button}
          />
        ))}
      </div>

    </div>
  );
}

export default Home;
