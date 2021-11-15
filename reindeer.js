const Discord = require("discord.js"),
  config = require("./config.json");

for (uwu of config.tokens) {
  let reindeer = new Discord.Client();

  reindeer.on("ready", () => {
    console.log(`[${reindeer.user.tag}] Ready`);

    reindeer.user.setPresence({
      activity: { name: `getting everything ready for christmas! | @mention help` },
      status: "dnd",
    });
    console.log(`[${reindeer.user.tag}] Presence set to DND`);

    setInterval(() => {
      reindeer.user.setPresence({
      activity: { name: `getting everything ready for christmas! | @mention help` },
        status: "dnd",
      });
      console.log(`[${reindeer.user.tag}] Presence Updated`);
    }, 300000);
  });

  reindeer.on("message", (message) => {
    if (message.content.includes(message.client.user.id)) {
      message.react("🥕");
      message.react("💖")
    }

    if (message.content.includes(`<@!${message.client.user.id}> help`)){
      let embed = new Discord.MessageEmbed()
      .setColor("ff0000")
      .setTitle("Reindeer Bots")
      .setThumbnail('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F223118%2Fisolated%2Fpreview%2F53256632b9aceec9dec9dae643d23645-cute-reindeer-festive-illustration-by-vexels.png&f=1&nofb=1')
      .setDescription(
        "**Info:**\nIt's almost that time of the year again! To keep up last year's fun, I've decided to bring back the Reindeer Bots so everyone's server can be just a little bit more merry!\n\n **Instructions:**\n`1.` Create a voice channel named 'Reindeer Pen'.\n `2.` Invite all the reindeer bots to your server.\n`3.` Send a message in any channel to have the reindeer join their channel and let them sit pretty! Ping them to give them a carrot! :p\n\n\n**Bot Invites:**\n[Dasher](https://discord.com/api/oauth2/authorize?client_id=789419994910818334&permissions=36767232&scope=bot), [Dancer](https://discord.com/api/oauth2/authorize?client_id=789418944989626408&permissions=36767232&scope=bot), [Prancer](https://discord.com/api/oauth2/authorize?client_id=789454241977860128&permissions=36767232&scope=bot), [Blitzen](https://discord.com/api/oauth2/authorize?client_id=789415712280018954&permissions=36767232&scope=bot), [Comet](https://discord.com/api/oauth2/authorize?client_id=789417819929575465&permissions=36767232&scope=bot), [Cupid](https://discord.com/api/oauth2/authorize?client_id=789418381920829460&permissions=36767232&scope=bot), [Donner](https://discord.com/api/oauth2/authorize?client_id=789456116881817650&permissions=36767232&scope=bot), [Vixen](https://discord.com/api/oauth2/authorize?client_id=789455003508539393&permissions=36767232&scope=bot), [Rudolph](https://discord.com/api/oauth2/authorize?client_id=789404709366661170&permissions=36767232&scope=bot)"
      )
      .setImage('https://media.discordapp.net/attachments/893557986964959252/909628316707872818/Screen_Shot_2021-11-14_at_9.18.04_PM.png')
      .setFooter(`Happy holidays! Brought to you by Tritan Bot's Team.`)
      message.channel.send(embed);
    }

    const ch = message.guild.channels.cache.find(
      (channel) => channel.name.toLowerCase() === "reindeer pen"
    );

    if (!ch) return;

    ch.join()
      .then((connection) => {})
      .catch((e) => {
        console.error(e);
      });
  });

  reindeer.login(uwu);
}
