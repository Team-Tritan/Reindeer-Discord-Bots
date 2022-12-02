"use strict";

import { Client } from "discord.js";

// checks for Rudolph ID
export function isMaster(reindeer: Client) {
  if (reindeer?.user?.id === "789404709366661170") return true;
  if (reindeer?.user?.id !== "789404709366661170") return false;
}

// duh
export async function setPresence(reindeer: Client) {
  reindeer.user?.setPresence({
    activity: {
      name: `getting everything ready for christmas! | @mention help`,
    },
    status: "dnd",
  });
  console.log(`[${reindeer.user?.tag}] Presence Updated`);
}

// only for us <33
export async function changeRoleColor(reindeer: Client) {
  if (isMaster(reindeer))
    // !!!!!
    setInterval(() => {
      let g = reindeer.guilds.cache.get("935395886761140264");
      let role = g?.roles.cache.find((r) => r.name === "Reindeer");
      let colors = ["#ff0000", "#009d07", "94ee3f"];
      let random = Math.floor(Math.random() * colors.length);
      try {
        role?.setColor(colors[random]);
        console.log("Master reindeer changed color in Tritan Server");
      } catch (e) {
        console.error("ERROR CHANGING ROLE COLOR: \n", e);
      }
    }, 30000);
}
