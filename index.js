const Discord = require("discord.js");
const client = new Discord.Client({ intents: [
    Discord.GatewayIntentBits.GuildPresences,
    Discord.GatewayIntentBits.GuildMembers
]});

const config = require("./config.json");
const welcome = require("./welcome");

client.on("ready", () => {
    console.log("Discord bot is online");

    welcome(client);
})

client.login(config.token);