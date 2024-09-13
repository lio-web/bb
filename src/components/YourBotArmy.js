// YourBotArmy.js
import React from "react";
import BotCard from "./BotCard"; 


const YourBotArmy = ({ army, handleRemoveBot }) => {
  
  

  return (
    <div style={styles.armyContainer}>
      {army.map((bot) => (
        <BotCard key={bot.name} bot={bot} onClick={handleRemoveBot} />
        
      ))}
      
    </div>
  );
};

const styles = {
  armyContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    backgroundColor: "#98e165", // Slightly darker green for the army section
    padding: "20px",
  },
};

export default YourBotArmy;
