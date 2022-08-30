import { useState } from "react";
import { CharacterSides } from "../Types/CharacterSides";

const useCharacter = () => {
  const [pos, setPos] = useState({ x: 2, y: 2 });
  const [side, setSide] = useState<CharacterSides>("down");

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
    setSide("left");
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
    setSide("right");
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
    }));
    setSide("down");
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
    }));
    setSide("up");
  };

  return {
    x: pos.x,
    y: pos.y,
    side,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};

export default useCharacter;
