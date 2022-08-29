import React from "react";
import * as S from "./AppStyle";
import Character from "./Components/Character/Character";

function App() {
  return (
    <S.Container>
      <S.Map>
        <Character x={5} y={5}/>
      </S.Map>
    </S.Container>
  );
}

export default App;
