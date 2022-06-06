import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const getRandomColor = () =>
  "#" +
  Math.floor(Math.random() * parseInt("ffffff", 16))
    .toString(16)
    .padStart(6, "0");

const SIZE = 100;
const DURATION_PER_CARD = 1;
const ANIMATION_SPEED = 0.5;

export default function StyleEx() {
  const [length, setLength] = useState(3);
  const datas = getDatas(length);
  return (
    <>
      <input
        type="number"
        onChange={(e) => setLength(e.target.valueAsNumber || 0)}
        value={length}
        min={0}
      />
      <br />
      {datas.length ? (
        <Deck>
          {datas
            .map(({ color, keyframes }, idx) => (
              <Card
                length={length}
                key={`${length}-${color}`}
                backColor={color}
                keyframes={keyframes}
                idx={idx}
              />
            ))
            .reverse()}
        </Deck>
      ) : (
        "0이상을 입력해주세요!"
      )}
    </>
  );
}

const getDatas = (length) =>
  Array.from(Array(length), (_, i) => i).map((i) => ({
    color: getRandomColor(),
    keyframes: keyframes`
      0% {
        z-index: ${i};
        opacity: 1;
        margin-left: 0px;
        margin-top: 0px;
      }
      ${(100 / (length * DURATION_PER_CARD)) * ANIMATION_SPEED}% {
        z-index: ${i};
        opacity: 0;
        margin-left: 30px;
        margin-top: -30px;
      }
      ${(100 / length) * (length - 1) - 1}% {
        z-index: 0;
        opacity: 0;
        margin-left: 0px;
        margin-top: 0px;
      }
      ${(100 / length) * (length - 1)}% {
        opacity: 1;
        margin-left: 0px;
        margin-top: 0px;
      }
      100% {
        z-index: ${i};
        opacity: 1;
        margin-left: 0px;
        margin-top: 0px;
      }
    `,
  }));

const Deck = styled.div`
  position: relative;
  margin-top: 20px;
  display: inline-block;
`;

const Card = styled.div`
  width: ${SIZE}px;
  height: ${SIZE}px;
  background-color: ${(props) => props.backColor};
  border-radius: 10px;
  opacity: 1;
  animation-name: ${(props) => props.keyframes};
  animation-duration: ${(props) => props.length * DURATION_PER_CARD}s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  animation-delay: ${(props) => 1 + props.idx * DURATION_PER_CARD}s;
  left: 0;
  top: 0;
  position: absolute;
`;
