import { Routes, Route, BrowserRouter, Link } from "react-router";

import { PlayingCard } from './playing-card/PlayingCard';
import { DeckCards } from './deck-of-cards/DeckCards';
import { CardsShuffle } from './cards-shuffle';
import { FallingCards } from './falling-cards/FallingCards';

import './App.css';

const TransitionsDemo = () => (
  <div className="poker-cards">
    <PlayingCard rank="A" suit="♠️" />
    <PlayingCard rank="A" suit="♦️" />
    <PlayingCard rank="A" suit="♣️" />
    <PlayingCard rank="A" suit="♥️" />
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div>
        <div className="navigation-menu">
            <Link to="/">Transitions Demo</Link>
            <Link to="/keyframes-cards">Keyframes Cards</Link>
            <Link to="/cards-shuffle">Cards Shuffle</Link>
            <Link to="/falling-cards">Falling Cards</Link>
        </div>
      </div>
      
        <Routes>
          <Route index element={<TransitionsDemo />} />
          <Route
            path="keyframes-cards"
            element={
              <div className="poker-cards">
                <DeckCards />
              </div>
            }
          />
          <Route
            path="cards-shuffle"
            element={
              <div className="poker-cards">
                <CardsShuffle />
              </div>
            }
          />
          <Route
            path="falling-cards"
            element={
              <div className="poker-cards">
                <FallingCards />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
