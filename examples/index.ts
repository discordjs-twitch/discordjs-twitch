import { Client } from "discord.js";
import { Manager } from "discordjs-twitch";

const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

const manager = new Manager({
  dbName: "twitch",
  dbPath: "./",
  debug: true,
  credentials: {
    // You can get credentials from https://dev.twitch.tv/console/apps
    clientID: "client-id",
    clientSecret: "client-secret",
  },
});

client.on("ready", () => {
  console.log('Bot "%s" started!', client.user.tag);
});

client.on("messageCreate", async (message) => {
  if (!message.inGuild() || message.author.bot) return;

  var args = message.content.slice("!!".length).trim().split(" ");
  var cmd = args.shift().toLowerCase();

  if (cmd === "setchannel") {
    const channel = message.mentions.channel.first() || args[0];
    if(!channel) {
      message.reply("Mention the text channel!");
      return;
    }
    
    manager
      .setChannel(message.guild.id, channel.id)
      .catch(console.log);

    message.reply("Success!");
    return;
  } else if (cmd === "addchannel") {
    const channel = args[0];
    if(!channel) {
      message.reply("Write the channel username");
      return;
    }
    
    const data = await manager.streamers.add(message.guild.id, "whymeosu");
    if ("status" in data) return console.log(data);

    message.reply("Success!");
    return;
  }
});

manager.on("streamStarted", (data) => {
  console.log(`"${data.username}" started stream "${data.title}"!`);
});

client.login("token");
