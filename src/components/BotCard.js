import React from "react";

const BotCard = ({ bot, handleEnlistBot }) => {
  return (
    <div style={styles.card} onClick={() => handleEnlistBot(bot)}>
      <img src={bot.avatar_url} alt={bot.name} style={styles.botImage} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <div style={styles.info}>
        <span>❤️ {bot.health}</span>
        <span>⚡ {bot.damage}</span>
        <span>🛡 {bot.armor}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    margin: "10px",
    width: "150px",
    backgroundColor: "#f9f9f9",
    cursor: "pointer",
  },
  botImage: {
    width: "100%",
    height: "auto",
  },
  info: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "10px",
  },
};

export default BotCard;
