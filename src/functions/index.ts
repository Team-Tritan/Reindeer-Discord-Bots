"use strict";

import Discord, {
  Client,
  PresenceStatusData,
  ColorResolvable,
} from "discord.js";
import {
  joinVoiceChannel,
  createAudioPlayer,
  createAudioResource,
  entersState,
  VoiceConnectionStatus,
} from "@discordjs/voice";
import { data } from "../../config";
import onReady from "../events/ready";
import onMessage from "../events/message";
import fs from "fs";
import path from "path";

const musicFiles = [
  "../music/modern.mp3",
  "../music/edm.mp3",
  "../music/og_christmas.mp3",
];

export function isMaster(reindeer: Client) {
  //@ts-ignore
  return data.master_ids.includes(reindeer.user.id);
}

export function attachListeners(reindeer: Client) {
  onReady(reindeer);
  onMessage(reindeer);

  process.on("unhandledRejection", (error) => {
    console.error(error);
  });
}

function setReindeerPresence(
  reindeer: Client,
  name: string,
  status: PresenceStatusData
) {
  reindeer.user?.setPresence({
    activities: [
      {
        name: `${name} | @mention help`,
      },
    ],
    status: status,
  });
}

export async function setPresence(reindeer: Client) {
  setInterval(async () => {
    if (isMaster(reindeer)) {
      setReindeerPresence(reindeer, `EDM christmas music today!`, "dnd");
    } else {
      setReindeerPresence(reindeer, `getting ready for christmas!`, "idle");
      console.log(`[${reindeer.user?.tag}] Presence Updated`);
    }
  }, 120000);
}

function changeColor(reindeer: Client, role: any, colors: string[]) {
  let random = Math.floor(Math.random() * colors.length);
  try {
    role?.setColor(colors[random] as ColorResolvable);
    console.log(`[${reindeer.user?.tag}] changed color in Tritan Server`);
  } catch (e) {
    console.error("ERROR CHANGING ROLE COLOR: \n", e);
  }
}

export async function changeRoleColor(reindeer: Client) {
  if (isMaster(reindeer))
    setInterval(() => {
      let g = reindeer.guilds.cache.get("935395886761140264");
      let role = g?.roles.cache.find((r) => r.name === "Reindeer");
      let colors = ["#ff0000", "#009d07", "94ee3f", "#ba4747"];
      changeColor(reindeer, role, colors);
    }, 60000);
}

function createAndPlayAudio(connection: any, files: string[], player: any) {
  let index = 0;

  function playNextFile() {
    const resource = createAudioResource(
      fs.createReadStream(path.join(__dirname, files[index]))
    );
    player.play(resource);
    index = (index + 1) % files.length;
  }

  player.on("idle", playNextFile);
  playNextFile();
}

export async function joinReindeerPen(reindeer: Client) {
  setInterval(async () => {
    reindeer.guilds.cache.forEach(async (g: any) => {
      let channels = await g.channels.fetch();

      let ch = channels.find(
        (channel: any) =>
          channel instanceof Discord.GuildChannel &&
          channel.name.toLowerCase() === "reindeer pen" &&
          channel.type === "GUILD_VOICE"
      );

      if (ch) {
        try {
          const connection = joinVoiceChannel({
            channelId: ch.id,
            guildId: g.id,
            adapterCreator: g.voiceAdapterCreator,
          });

          await entersState(connection, VoiceConnectionStatus.Ready, 30_000);

          if (isMaster(reindeer)) {
            const player = createAudioPlayer();
            createAndPlayAudio(connection, musicFiles, player);
          }
        } catch (error) {
          console.log(`Failed to join channel: ${ch.name} in ${g.name}`);
        }
      }
    });
  }, 60000);
}
