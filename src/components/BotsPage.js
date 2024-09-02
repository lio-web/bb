import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const addBotToArmy = (bot) => {
    setArmy([...army, bot]);
  };

  const removeBotFromArmy = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const dischargeBot = (botId) => {
    fetch(`/bots/${botId}`, { method: 'DELETE' })
      .then(() => {
        setBots(bots.filter(bot => bot.id !== botId));
        setArmy(army.filter(bot => bot.id !== botId));
      });
  };



  return (
    <div>
      <YourBotArmyarmy={army} removeBotFromArmy={removeBotFromArmy} dischargeBot={dischargeBot}/>
      <BotCollection bots={bots} addBotToArmy={addBotToArmy} />
    </div>
  )
}

export default BotsPage;
