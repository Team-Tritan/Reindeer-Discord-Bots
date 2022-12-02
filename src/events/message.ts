"use strict";

import Discord, { Client } from "discord.js";

export default function onMessage(reindeer: Client) {
  reindeer.on("message", (message: any) => {
    let ctn = message.content;
    let self_id = message.client.user.id;

    if (ctn.includes(message.client.user.id)) {
      message.react("🥕");
      message.react("💖");
    }

    if (ctn.includes(`<@${self_id}> help`)) {
      let embed = new Discord.MessageEmbed()
        .setColor("ff0000")
        .setTitle("Reindeer Bots")
        .setThumbnail(
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F223118%2Fisolated%2Fpreview%2F53256632b9aceec9dec9dae643d23645-cute-reindeer-festive-illustration-by-vexels.png&f=1&nofb=1"
        )
        .setDescription(
          "**Info:**\nIt's almost that time of the year again! To keep up the last two year's traditions, I've decided to bring back the Reindeer Bots so everyone's server can be just a little bit more merry!\n\n **Instructions:**\n`1.` Create a voice channel named 'Reindeer Pen'.\n `2.` Invite all the reindeer bots to your server.\n`3.` The reindeer search for their reindeer pen channel every minute, just make the channel and wait `60 seconds` for them to join. You can ping them to give them a carrot! \n\n **Rudolph also now plays christmas music!**\n\n\n**Bot Invites:**\n[Dasher](https://discord.com/api/oauth2/authorize?client_id=789419994910818334&permissions=34982976&scope=bot), [Dancer](https://discord.com/api/oauth2/authorize?client_id=789418944989626408&permissions=34982976&scope=bot), [Prancer](https://discord.com/api/oauth2/authorize?client_id=789454241977860128&permissions=34982976&scope=bot), [Blitzen](https://discord.com/api/oauth2/authorize?client_id=789415712280018954&permissions=34982976&scope=bot), [Comet](https://discord.com/api/oauth2/authorize?client_id=789417819929575465&permissions=34982976&scope=bot), [Cupid](https://discord.com/api/oauth2/authorize?client_id=789418381920829460&permissions=34982976&scope=bot), [Donner](https://discord.com/api/oauth2/authorize?client_id=789456116881817650&permissions=34982976&scope=bot), [Vixen](https://discord.com/api/oauth2/authorize?client_id=789455003508539393&permissions=34982976&scope=bot), [Rudolph](https://discord.com/api/oauth2/authorize?client_id=789404709366661170&permissions=34982976&scope=bot) \n\n**Support:**\n https://discord.gg/http"
        )
        .setImage(
          "https://media.discordapp.net/attachments/938923368000933930/1048034499734286417/9N80aDV89xsk.jpg"
        )
        .setFooter(`Merry Crisis! | Tritan Development | https://tritan.dev`);
      message.channel.send(embed);
    }
  });
}
