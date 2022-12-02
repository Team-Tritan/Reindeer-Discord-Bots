<center><img  src="https://images-ext-1.discordapp.net/external/TziDjM5SKqCwP-GcO19AWKHYqc9JzPUzIlnkNVChJHI/%3Fu%3Dhttps%253A%252F%252Fimages.vexels.com%252Fmedia%252Fusers%252F3%252F223118%252Fisolated%252Fpreview%252F53256632b9aceec9dec9dae643d23645-cute-reindeer-festive-illustration-by-vexels.png%26f%3D1%26nofb%3D1/https/external-content.duckduckgo.com/iu/" length='200px' width='200px'></center>

# Reindeer Discord Bots!

## About The Project:

It's almost that time of the year again! To keep up last year's fun, I've decided to bring back the Reindeer Bots so everyone's server can be just a little bit more merry! This bot will sit in a voice channel named 'Reindeer Pin' to show some spirit in your server.

## Info:

- `[Mention] help` pulls up a info menu.
- `[Mention]` gives the reindeer a carrot.

## Hosted Versions:

[Dasher](https://discord.com/api/oauth2/authorize?client_id=789419994910818334&permissions=34982976&scope=bot), [Dancer](https://discord.com/api/oauth2/authorize?client_id=789418944989626408&permissions=34982976&scope=bot), [Prancer](https://discord.com/api/oauth2/authorize?client_id=789454241977860128&permissions=34982976&scope=bot), [Blitzen](https://discord.com/api/oauth2/authorize?client_id=789415712280018954&permissions=34982976&scope=bot), [Comet](https://discord.com/api/oauth2/authorize?client_id=789417819929575465&permissions=34982976&scope=bot), [Cupid](https://discord.com/api/oauth2/authorize?client_id=789418381920829460&permissions=34982976&scope=bot), [Donner](https://discord.com/api/oauth2/authorize?client_id=789456116881817650&permissions=34982976&scope=bot), [Vixen](https://discord.com/api/oauth2/authorize?client_id=789455003508539393&permissions=34982976&scope=bot), [Rudolph](https://discord.com/api/oauth2/authorize?client_id=789404709366661170&permissions=34982976&scope=bot)

## Instructions:

1. Install discord.js v12.5.1.
2. Make a bot application in the Discord developer portal for every reindeer, yes, every one.
3. Add all tokens to the config file array.
4. Create a voice channel named 'Reindeer Pen'.
5. Invite all the reindeer bots to your server.
6. run `yarn install` or get yarn bozo
7. run `yarn dev` for nodemon or build & start (`yarn build`, `yarn start`)
8. The reindeer search for their reindeer pen channel every minute, just make the channel and wait 60 seconds for them to join. Ping them to give them a carrot! Rudolph also now plays christmas music! :p\

## NOTE

- Due to djs v12 being depreciated, you need to modify the node module by adding 1 line to the following file:

  `node_modules/discord.js/src/client/actions/MessageCreate.js`

- Under line 9 (the line defining what a channel is), you need to add the following to ignore voice text channels as djs doesn't know how to handle them and the bot crashes.

  `if (!channel.isText()) return {};`

- It should look like this:

  ```class MessageCreateAction extends Action {
  handle(data) {
    const client = this.client;
    const channel = client.channels.cache.get(data.channel_id);
    if (!channel.isText()) return {}; // added
    if (channel) {
      ...
  ```

## License

- Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)
  - You must give credit to the original author of the work, including a URI or hyperlink to the work, this Public license and a copyright notice.
  - Original author can request to remove any of their work even if it is in a public repository.
  - **Note, you are not allowed to remove the credit in the footer of the help emed if you self-host this bot.**

## Links:

- Check out [Tritan Bot](https://tritan.gg/invite) please!
- Author: [Dylan James](https://github.com/dylanjamesdev)
- Support: [Tritan Development](https://discord.gg/http)
