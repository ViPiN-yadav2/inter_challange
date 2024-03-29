import React from "react";
import "../../src/App.css";

const PlayerCard = ({ playerImage, teamName, totalEvents, sport }) => {
  return (
    <div className="player-card m-1">
      <img src={playerImage} alt="Player" className="player-image p-2" />
      <div className="card-info">
        <h2 className="team-name text-sm text-left font-bold">{teamName}</h2>
        <div className="sub-info">
          <div>
            <p className="total-events">Total Events</p>
            <p>{totalEvents}</p>
          </div>
          <div>
            <p className="sport-category">Sport</p>
            <p>{sport}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
