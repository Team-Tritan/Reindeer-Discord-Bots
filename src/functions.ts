"use strict";

import { Client } from "discord.js";
import { data } from "../config";

// checks for Rudolph ID
export function isMaster(reindeer: Client) {
  if (reindeer?.user?.id === data.master_id) return true;
  if (reindeer?.user?.id !== data.master_id) return false;
}

// duh
export async function setPresence(reindeer: Client) {
  if (isMaster(reindeer)) {
    reindeer.user?.setPresence({
      activity: {
        name: `Leading the team to victory! | @mention help`,
      },
      status: "idle",
    });
  } else {
    reindeer.user?.setPresence({
      activity: {
        name: `getting ready for christmas! | @mention help`,
      },
      status: "dnd",
    });
    console.log(`[${reindeer.user?.tag}] Presence Updated`);
  }
}

// only for us <33
export async function changeRoleColor(reindeer: Client) {
  if (isMaster(reindeer))
    setInterval(() => {
      let g = reindeer.guilds.cache.get("935395886761140264");
      let role = g?.roles.cache.find((r) => r.name === "Reindeer");
      let colors = ["#ff0000", "#009d07", "94ee3f", "#ba4747"];
      let random = Math.floor(Math.random() * colors.length);
      try {
        role?.setColor(colors[random]);
        console.log(`[${reindeer.user?.tag}] changed color in Tritan Server`);
      } catch (e) {
        console.error("ERROR CHANGING ROLE COLOR: \n", e);
      }
    }, 30000);
}
