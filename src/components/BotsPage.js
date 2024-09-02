import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  
  const [army, setArmy] = useState([]);

  // useEffect(() => {
  //   fetch('/bots')
  //     .then(response => response.json())
  //     .then(data => setBots(data));
  // }, []);

  const addBotToArmy = (bot) => {
    setArmy(prevArmy=>[...prevArmy, bot]);
  };

  const removeBotFromArmy = (botId) => {
    setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setArmy(prevArmy => prevArmy.filter(bot => bot.id !== botId));
      });
  };



  return (
    <div>
      <YourBotArmy army={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot}/>
      <BotCollection onAddBot={addBotToArmy} onDeleteBot={dischargeBot}  />
    </div>
  )
}

export default BotsPage;
