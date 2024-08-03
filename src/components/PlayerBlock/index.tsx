import { useEffect, useState } from 'react'
import { Score } from '../Score'
import { Divider } from '../Divide';
import { Button, ButtonContainer, IconButton } from '../Buttons';
import { lessButtons, plusButtons } from '../../mocks/plusButtons';
import HeaderBlock from './HeaderBlock';
import DeletePlayer from './DeletePlayer';
import { InputName } from '../Inputs';
import { Block } from './Block';
import { ArrowCounterClockwise, X } from '@phosphor-icons/react';

interface PlayerModel {
    score: number;
    player: string;
}
interface PlayerBlockProps {
    position: number,
    player: PlayerModel;
    stylesGame?: any;
    updateName: (key:number, item:any, value:string) => void
    updateScore: (key:number, item:any, value:number) => void
    resetScore: (key:number, item:any) => void
    deletePlayer: (key:number, item:any) => void
}

const PlayerBlock = ({position, player, stylesGame, updateScore, resetScore, deletePlayer, updateName}:PlayerBlockProps) => {
  const [nameUpdate, setNameUpdate] = useState<string>('')

  useEffect(()=>{
    setNameUpdate(player.player)
  },[player.player]);

  return (
    <Block key={position} shadow={stylesGame.shadow} color={stylesGame.color}>
      <HeaderBlock>
        <InputName 
          value={nameUpdate}
          onBlur={()=>updateName(position, player, nameUpdate)} 
          onChange={(e:any)=>setNameUpdate(e.target.value)}
          color={stylesGame.font}
        />
        <DeletePlayer>
          <IconButton 
            minwidth='10px'
            onClick={()=>deletePlayer(position, player)}
            color={stylesGame.shadow}
          >
            <X size={15} weight="bold" />
          </IconButton>
        </DeletePlayer>
      </HeaderBlock>

        <Divider color={stylesGame.shadow}/>
        <Score color={stylesGame.font}>{player.score}</Score>
        <Divider color={stylesGame.shadow}/>

        <ButtonContainer>
          <IconButton 
            full={true}
            onClick={()=>resetScore(position, player)}
            color={stylesGame.shadow}
          >
            <ArrowCounterClockwise size={20} />
            RESET
          </IconButton>
        </ButtonContainer>

        <ButtonContainer>
          {plusButtons.map((b, i)=>(
            <Button 
              full={true} 
              key={i}
              onClick={()=>updateScore(position, player, b.value)}
              color={stylesGame.shadow}
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
              color={stylesGame.shadow}
            >
              {b.title}
            </Button>
          ))}
        </ButtonContainer>
    </Block>
  )
}

export default PlayerBlock