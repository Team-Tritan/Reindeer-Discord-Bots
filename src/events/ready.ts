"use strict";

import { Client } from "discord.js";
import * as fn from "../functions";
import fs from "fs";
import path from "path";

export default function onReady(reindeer: Client) {
  reindeer.on("ready", async () => {
    console.log(
      `[${reindeer.user?.tag}] Ready | ${reindeer.guilds.cache.size} guilds`
    );
  try {
      let broadcast: any;
      if (fn.isMaster(reindeer)) broadcast = reindeer?.voice?.createBroadcast();

      if (broadcast)
        broadcast.play(
          fs.createReadStream(path.join(__dirname, "../music/edm.mp3"))
        );

      setInterval(() => {
        if (broadcast)
          broadcast.play(
            fs.createReadStream(path.join(__dirname, "../music/edm.mp3"))
          );
      }, 2700000);
    } catch (e){ 
      console.error(e)
    }

    await fn.setPresence(reindeer);
    await fn.changeRoleColor(reindeer); // only for us <33
    await fn.joinReindeerPen(reindeer);
  });
}
