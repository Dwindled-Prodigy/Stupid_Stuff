
const token = "MTE2MjIxNzA0ODgxOTExNDEzNw.G6MxT_.grVjNVwh9W--aqon5kNIPlu_VgBQ0kcbpztLLk"; 

const {Client, GatewayIntentBits} = require("discord.js");

const client = new Client({
    intents:[
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
});

client.on("ready", () =>{
    console.log("The AI bot is online"); //message when bot is online
});

client.on("message", (message) => {
    if (message.content.substring(0, 1) === "!") {
        message.channel.send("Hello from AI bot"); //reply if message has "!" as first character
    }
});

client.login(token);