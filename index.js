const { Client, GatewayIntentBits } = require('discord.js');
const fetch = import('node-fetch');

const client = new Client({ 
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

const botPrefix = '/'; // Set your bot's command prefix here

client.on('messageCreate', async (message) => {
  if (message.author.bot) return; 
  const args = message.content.slice(botPrefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(botPrefix)) {
    switch (command) {
      case 'ping':
        message.reply('Pong!');
        break;

      case 'hello':
        message.reply('Hello, Discord World!');
        break;

      default:
        message.reply('Invalid command. Type help for a list of available commands.');
        break;
    }
  } else {
     message.reply("invalid");
  }
});

client.login('MTE2MjIxNzA0ODgxOTExNDEzNw.GLdRI9.XerMtPQrZEMcNMwXcnYKTLwJPHtibXo6KDohWw');
