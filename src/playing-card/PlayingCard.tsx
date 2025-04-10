import { FC } from "react";

import "./PlayingCard.css";

type PlayingCardProps = {
  rank: string;
  suit: string;
  className?: string;
  hoverDisabled?: boolean;
  faceSide?: 'front' | 'back';
}

export const PlayingCard: FC<PlayingCardProps> = ({ 
  rank, 
  suit, 
  className = '', 
  hoverDisabled, 
  faceSide = 'back' 
}) => {
  const rankElement = (
    <div>
      {rank}
    </div>
  )

  return (
    <div className={`container ${faceSide} ${!hoverDisabled ? 'flip-enabled' : ''}`}>
      <div className={`card ${className}`}>
        <div className="card-common back-uniform" />
        <div className="card-common card-front card-placement">
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

