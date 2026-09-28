import "dotenv/config";

import { Client, Events, GatewayIntentBits } from "discord.js";

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    return message.reply({
      content: "getting short url for" + url,
    });
  }
  message.reply({ content: "hii there" });
});

client.on("interactionCreate", (interaction) => {
  console.log(interaction);
  interaction.reply("pong");
});
client.login(process.env.DISCORD_TOKEN);
