// BotCollection.js
import React, { useEffect, useState } from "react";
import BotCard from "./BotCard"; 

const BotCollection = ({ handleEnlistBot }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
   
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  return (
    <div style={styles.collectionContainer}>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} handleEnlistBot={handleEnlistBot} />
      ))}
    </div>
  );
};

const styles = {
  collectionContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#d3e95f", // Green background as per the image
    padding: "20px",
  },
};

export default BotCollection;
