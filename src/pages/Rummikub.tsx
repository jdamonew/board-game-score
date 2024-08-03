import { useEffect, useState } from 'react';
import { IconButton } from '../components/Buttons';
import PlayerBlock from '../components/PlayerBlock';
import { Plus } from "@phosphor-icons/react"
import { Rummikub as RummikubVariables } from '../enum/pages-colors';
import LogoGame from '../assets/rummikub-logo.png'
const gameName = "rummikub";

function Rummikub() {

    const [players, setPlayers] = useState<any[]>([]);
    const [nextPlayer, setNextPlayer] = useState<number>(1);

    const addNewPlayer=()=>{
         let lPlayers = JSON.parse(localStorage.getItem('rummikub') || '{}');
         if(lPlayers.length === 0){
             localStorage.setItem('rummikub',JSON.stringify([{player:`Player ${nextPlayer}`, score:0}]) )
            }else{
             localStorage.setItem('rummikub',JSON.stringify([...lPlayers, {player:`Player ${nextPlayer}`, score:0}]) )
         }

         verifyLocalStorage()
    }

    const verifyLocalStorage=()=>{
        if(!localStorage.getItem(gameName)){
            localStorage.setItem(gameName, JSON.stringify(players))
            localStorage.setItem(`${gameName}-playerCount`, JSON.stringify(players))
        }else{
            let lPlayers = JSON.parse(localStorage.getItem(gameName) || '{}');
            setPlayers(lPlayers)
            setNextPlayer(lPlayers.length+1)
        }
    }

    function resetScore(position: number, item:any){
      let lPlayers = JSON.parse(localStorage.getItem(gameName) || '{}');
      lPlayers[position].score = 0;
      localStorage.setItem(gameName, JSON.stringify(lPlayers))
      verifyLocalStorage();

    }

    function deletePlayer(position: number, item:any){
      let lPlayers = JSON.parse(localStorage.getItem(gameName) || '{}');
      lPlayers.splice(position, 1)
      localStorage.setItem(gameName, JSON.stringify(lPlayers))
      verifyLocalStorage();

    }

    function updateScore(position: number, item:any, value:number){
      let lPlayers = JSON.parse(localStorage.getItem(gameName) || '{}');
      lPlayers[position].score = lPlayers[position].score + value;
      localStorage.setItem(gameName, JSON.stringify(lPlayers))
      verifyLocalStorage();
    }

    function updateName(position: number, item:any, value:string){
      console.log(value);
      let lPlayers = JSON.parse(localStorage.getItem(gameName) || '{}');
      lPlayers[position].player = value;
      localStorage.setItem(gameName, JSON.stringify(lPlayers))
      verifyLocalStorage();
    }

    useEffect(()=>{
        verifyLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[''])


  return (
    <div className="home-container">
      <div className="home-container_header">
        <img src={LogoGame} width={300} alt="Rummikub logo"/>

        <IconButton 
          onClick={addNewPlayer} 
          color={RummikubVariables.shadow}
        > 
          <Plus color='#FFFFFF' size={20}/>
          New Player 
        </IconButton>

      </div> 
      <div className='players-container'>
        {players.map((item, index)=>(
          <PlayerBlock
            key={index}
            position={index}
            player={item}
            updateScore={updateScore}
            resetScore={resetScore}
            deletePlayer={deletePlayer}
            updateName={updateName}
            stylesGame = {RummikubVariables}

          />
        ))}
      </div> 

    </div>
  );
}

export default Rummikub;
