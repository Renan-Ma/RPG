import React from "react";
import { CharacterSides } from "../../Types/CharacterSides";
import * as S from "./styled";

type Props = {
  x: number;
  y: number;
  side: CharacterSides;
};

const Character = ({ x, y, side }: Props) => {
  const size = 30;
  const sides = {
    down: 0,
    left: -30,
    right: -60,
    up: -90,
  };
  return (
    <S.Container
      size={30}
      left={x * size}
      top={y * size}
      sidesPos={sides[side] ?? 0}
    ></S.Container>
  );
};

export default Character;
