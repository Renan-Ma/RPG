import React, { useEffect } from "react";
import * as S from "./AppStyle";
import Character from "./Components/Character/Character";
import useCharacter from "./Hooks/useCharacter";

function App() {
  const char = useCharacter();

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
  }, []);

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case "KeyA":
      case "ArrowLeft":
        char.moveLeft();
        break;
      case "KeyW":
      case "ArrowUp":
        char.moveUp();
        break;
      case "KeyD":
      case "ArrowRight":
        char.moveRight();
        break;
      case "KeyS":
      case "ArrowDown":
        char.moveDown();
        break;
    }
  };
  return (
    <S.Container>
      <S.Map>
        <Character x={char.x} y={char.y} side={char.side} />
      </S.Map>
    </S.Container>
  );
}

export default App;
