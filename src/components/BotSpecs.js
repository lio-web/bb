import React from 'react';

const BotSpecs = ({ bot, enlistBot, goBack }) => {
  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <h3>Class: {bot.bot_class}</h3>
      <div>
        <p>Health: {bot.health}</p>
        <p>Damage: {bot.damage}</p>
        <p>Armor: {bot.armor}</p>
      </div>
      <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default BotSpecs;
