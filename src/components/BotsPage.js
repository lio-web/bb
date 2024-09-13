
import React, { useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";

const BotPage = () => {
  const [army, setArmy] = useState([]);

  
  const handleEnlistBot = (newBot) => {
    if (!army.some((bot) => bot.id === newBot.id)) {
      setArmy([...army, newBot]);
    }
  };


  const handleRemoveBot = (botToRemove) => {
    setArmy(army.filter((bot) => bot.id !== botToRemove.id));
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      <YourBotArmy army={army} handleRemoveBot={handleRemoveBot} />
      <h1>All Bots</h1>
      <BotCollection handleEnlistBot={handleEnlistBot} />
      
    </div>
  );
};

export default BotPage;
