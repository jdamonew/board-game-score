import { useEffect, useState } from 'react'
import { Score } from '../Score'
import { Divider } from '../Divide';
import { Button, ButtonContainer } from '../Buttons';
import { lessButtons, plusButtons } from '../../mocks/plusButtons';
import HeaderBlock from './HeaderBlock';
import DeletePlayer from './DeletePlayer';
import { InputName } from '../Inputs';

interface PlayerModel {
    score: number;
    player: string;
}


interface PlayerBlockProps {
    position: number,
    player: PlayerModel;
    updateName: (key:number, item:any, value:string) => void
    updateScore: (key:number, item:any, value:number) => void
    resetScore: (key:number, item:any) => void
    deletePlayer: (key:number, item:any) => void
}

const PlayerBlock = ({position, player, updateScore, resetScore, deletePlayer, updateName}:PlayerBlockProps) => {
  const [nameUpdate, setNameUpdate] = useState<string>('')

  useEffect(()=>{
    setNameUpdate(player.player)
  },[player.player]);

  return (
    <div key={position} className='player-block'>
      <HeaderBlock>
        <InputName 
          value={nameUpdate}
          onBlur={()=>updateName(position, player, nameUpdate)} 
          onChange={(e:any)=>setNameUpdate(e.target.value)}
        />
        <DeletePlayer>
          <Button 
            minwidth='30px'
            onClick={()=>deletePlayer(position, player)}
          >
            X
          </Button>
        </DeletePlayer>
      </HeaderBlock>

        <Divider color='#01553f'/>
        <Score>{player.score}</Score>
        <Divider color='#01553f'/>

        <ButtonContainer>
          <Button 
            full={true}
            onClick={()=>resetScore(position, player)}
          >
            RESET
          </Button>
        </ButtonContainer>

        <ButtonContainer>
          {plusButtons.map((b, i)=>(
            <Button 
              full={true} 
              key={i}
              onClick={()=>updateScore(position, player, b.value)}
            >
                {b.title}
              </Button>
          ))}
        </ButtonContainer>

        <ButtonContainer>
          {lessButtons.map((b,i)=>(
            <Button 
              full={true}
              key={i}
              onClick={()=>updateScore(position, player, b.value)}
            >
              {b.title}
            </Button>
          ))}
        </ButtonContainer>

    </div>
  )
}

export default PlayerBlock