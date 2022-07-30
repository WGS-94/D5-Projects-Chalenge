import { useEffect } from 'react';

import { Character } from './components/Character';
import { useCharacter } from './hook/useCharacter';

import * as S from './App.styles';
import './App.css';

const App = () => {

  const char = useCharacter('Ganga');
  const char2 = useCharacter('Wilson');

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
  });

  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.code) {
      case 'KeyA':
      case 'ArrowLeft':
        char.moveLeft();
      break;
      case 'KeyW':
      case 'ArrowUp':
        char.moveUp();
      break;
      case 'KeyD':
      case 'ArrowRight':
        char.moveRight();
      break;
      case 'KeyS':
      case 'ArrowDown':
        char.moveDown();
      break;
    }
  }

  return (
    <S.Container>
       <S.Map>
        <Character x={char.x} y={char.y} side={char.side} name={char.name} />
        <Character x={char2.x} y={char2.y} side={char2.side} name={char2.name} />
      </S.Map>
    </S.Container>
  );
}

export default App;
