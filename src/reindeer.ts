"use strict";

import Discord from "discord.js";
import { data } from "../config";
import * as fn from "./functions";

const tokens = data.tokens;

for (const i of tokens) {
  let reindeer = new Discord.Client();
  fn.attachListeners(reindeer);

  reindeer.login(i);
}
