import { FC } from "react";

import "./DeckCards.css";

type CardProps = {
  rank: string;
  suit: string;
  className?: string;
}

export const Card: FC<CardProps> = ({ rank, suit, className = '' }) => {
  const rankElement = (
    <div>
      {rank}
    </div>
  )

  return (
    <div className="deck-container">
      <div className={`deck-card ${className}`}>
        <div className="deck-card-face deck-front-empty" />
        <div className="deck-card-face deck-card-back deck-card-placement">
          <div className="card-info">
            {rankElement}
            {suit}
          </div>
          <div>
            {suit}
          </div>
          <div className="card-info">
            {rankElement}
            {suit}
          </div>
        </div>
      </div>
    </div>
  )
}

export const DeckCards: FC = () => {
  return (
    <>
      <Card className="king-of-hearts" rank="K" suit="♥️" />
      <Card className="king-of-clubs" rank="K" suit="♠️" />
      <Card className="ace-of-spades" rank="A" suit="♥️" />
      <Card className="ace-of-clubs" rank="A" suit="♣️" />
      <Card className="ace-of-diamonds" rank="A" suit="♦️" />
    </>
  )
}