import { useState } from "react";
import { useSprings, animated } from "react-spring";

import { PlayingCard } from "../playing-card/PlayingCard";

const cards = Array.from({ length: 20 }, (_, i) => i); // Example deck of 10 cards

export const CardsShuffle = () => {
  const [_, setShuffling] = useState(false);

  // Define the animation for each card
  const [springs, api] = useSprings(cards.length, (i) => ({
    x: 0,
    y: 0,
    rotate: 0,
    delay: i * 500,
  }));

  const handleShuffle = () => {
    setShuffling(true);

    // Animate cards to shuffle positions
    api.start((i) => ({
      x: Math.random() * 400 - 100, // Random x position
      y: Math.random() * 100 - 25, // Random y position
      rotate: Math.random() * 50 - 15, // Random rotation
      delay: i * 50, // Staggered animation
    }));

    // Return cards to a stacked position after 1.5 seconds
    setTimeout(() => {
      api.start((i) => ({
        x: 0,
        y: 0,
        rotate: 0,
        delay: i * 50,
      }));
      setShuffling(false);
    }, 1500);
  };

  return (
    <div style={{ position: "relative", width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        onClick={handleShuffle}
        style={{
          marginBottom: 400,
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Shuffle
      </button>
      {springs.map((style, i) => (
        <animated.div
          key={i}
          style={{
            ...style,
            position: "absolute",
            transform: style.rotate.to((r) => `rotate(${r}deg)`),
          }}
        >
          <PlayingCard hoverDisabled rank="A" suit="♠️" />

        </animated.div>
      ))}
    </div>
  );
};
