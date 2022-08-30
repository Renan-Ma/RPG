import React, { useState } from "react";

const useCharacter = () => {
  const [pos, setPos] = useState({ x: 2, y: 2 });

  const moveLeft = () => {
    setPos((pos) => ({
      x: pos.x - 1,
      y: pos.y,
    }));
  };

  const moveRight = () => {
    setPos((pos) => ({
      x: pos.x + 1,
      y: pos.y,
    }));
  };

  const moveDown = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y + 1,
    }));
  };

  const moveUp = () => {
    setPos((pos) => ({
      x: pos.x,
      y: pos.y - 1,
    }));
  };

  return {
    x: pos.x,
    y: pos.y,
    moveLeft,
    moveRight,
    moveDown,
    moveUp,
  };
};

export default useCharacter;
