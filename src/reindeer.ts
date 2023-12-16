"use strict";

import Discord from "discord.js";
import { data } from "../config";
import * as fn from "./functions";

const tokens = data.tokens;

for (const i of tokens) {
  const reindeer = new Discord.Client({
    intents: new Discord.Intents([
      Discord.Intents.FLAGS.GUILDS,
      Discord.Intents.FLAGS.GUILD_VOICE_STATES,
    ]),
  });

  fn.attachListeners(reindeer);
  reindeer.login(i);
}
