"use strict";

import { Client } from "discord.js";
import * as fn from "../functions";

export default function onReady(reindeer: Client) {
  reindeer.on("ready", async () => {
    console.log(
      `[${reindeer.user?.tag}] Ready | ${reindeer.guilds.cache.size} guilds`
    );

    await fn.setPresence(reindeer);
    await fn.changeRoleColor(reindeer); // only for us <33
    await fn.joinReindeerPen(reindeer);
  });
}
