import { useSprings, animated, to } from '@react-spring/web';

import { PlayingCard } from '../playing-card/PlayingCard';

const trans = (r: number, s: number) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const toInitial = (i: number) => ({
  x: 0,
  y: i * -4,
  rot: -10 + Math.random() * 20,
  scale: 1,
  delay: i * 100,
});
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });

export const FallingCards = () => {
  const [springs] = useSprings(20, (i) => ({
    from: from(),
    ...toInitial(i),
    immediate: false,
  }));

  return springs.map(({ x, y, rot, scale }, i) => (
    <animated.div
      key={i}
      style={{
        position: 'absolute',
        transform: to([x, y], (x, y) => `translate3d(${x}px, ${y}px, 0)`),
      }}
    >

      <animated.div
        style={{
          transform: to([rot, scale], trans),
        }}
      >
        <PlayingCard
          faceSide='front'
          rank={i.toString()}
          suit="♠️"
          hoverDisabled
        />
      </animated.div>
    </animated.div>
  ));
}
