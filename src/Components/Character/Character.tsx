import React from 'react'
import * as S from "./styled";

type Props ={
  x: number;
  y: number
}


const Character = ({x, y}: Props) => {
const size = 30;
  return (
    <S.Container
    size = {30}
      left = {x*size}
      top = {y * size}
      >
     
      </S.Container>
  )
}

export default Character