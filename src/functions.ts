"use strict";

import { Client, VoiceConnection, VoiceBroadcast } from "discord.js";
import { data } from "../config";

// checks for Rudolph ID
export function isMaster(reindeer: Client) {
  if (reindeer?.user?.id === data.master_id) return true;
  if (reindeer?.user?.id !== data.master_id) return false;
}

// Duh
export async function setPresence(reindeer: Client) {
  setInterval(async () => {
    if (isMaster(reindeer)) {
      reindeer.user?.setPresence({
        activity: {
          name: `We're back! | @mention help`,
        },
        status: "dnd",
      });
    } else {
      reindeer.user?.setPresence({
        activity: {
          name: `getting ready for christmas! | @mention help`,
        },
        status: "idle",
      });
      console.log(`[${reindeer.user?.tag}] Presence Updated`);
    }
  }, 120000);
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
    }, 60000);
}

// join the reindeer pen and handle connection
export async function joinReindeerPen(reindeer: Client) {
  setInterval(() => {
    reindeer.guilds.cache.forEach((g) => {
      let ch = g.channels.cache.find(
        (channel: any) =>
          channel.name.toLowerCase() === "reindeer pen" &&
          channel.type === "voice"
      );

      if (ch)
        //@ts-ignore
        ch.join()
          .then(async (ctx: VoiceConnection) => {
            console.log(
              `[${reindeer.user?.tag}] joined reindeer pen for ${g.name} (${g.id})`
            );

            if (isMaster(reindeer)) {
              //@ts-ignore
              ctx.play(reindeer.voice?.broadcasts[0], {
                highWaterMark: 25,
                bitrate: 384,
              });

              console.log(
                `[${reindeer.user?.tag}] Playing music in ${g.name} (${g.id}`
              );
            } else {
              ctx?.voice?.setSelfDeaf(true);
              `[${reindeer.user?.tag}] Deafened in ${g.name} (${g.id}`;
            }
          })
          .catch((e: Error) => {
            console.error(
              `[${reindeer.user?.tag}] FAILED to join reindeer pen for ${g.name} (${g.id})`
            );
          });
    });
  }, 60000);
}
