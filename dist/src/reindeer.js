"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importDefault(require("discord.js"));
const config_1 = require("../config");
const fn = __importStar(require("./functions"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const tokens = config_1.data.tokens;
for (const i of tokens) {
    let reindeer = new discord_js_1.default.Client();
    let broadcast;
    reindeer.on("ready", () => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        console.log(`[${(_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.tag}] Ready | In ${reindeer.guilds.cache.size} guilds`);
        if (fn.isMaster(reindeer))
            broadcast = (_b = reindeer === null || reindeer === void 0 ? void 0 : reindeer.voice) === null || _b === void 0 ? void 0 : _b.createBroadcast();
        if (broadcast)
            broadcast.play(fs_1.default.createReadStream(path_1.default.join(__dirname, "music.mp3")));
        yield fn.setPresence(reindeer);
        yield fn.changeRoleColor(reindeer); // only for us <33
        yield fn.joinReindeerPen(reindeer);
    }));
    reindeer.on("message", (message) => {
        let ctn = message.content;
        let self_id = message.client.user.id;
        if (ctn.includes(message.client.user.id)) {
            message.react("🥕");
            message.react("💖");
        }
        if (ctn.includes(`<@${self_id}> help`)) {
            let embed = new discord_js_1.default.MessageEmbed()
                .setColor("ff0000")
                .setTitle("Reindeer Bots")
                .setThumbnail("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F223118%2Fisolated%2Fpreview%2F53256632b9aceec9dec9dae643d23645-cute-reindeer-festive-illustration-by-vexels.png&f=1&nofb=1")
                .setDescription("**Info:**\nIt's almost that time of the year again! To keep up the last two year's traditions, I've decided to bring back the Reindeer Bots so everyone's server can be just a little bit more merry!\n\n **Instructions:**\n`1.` Create a voice channel named 'Reindeer Pen'.\n `2.` Invite all the reindeer bots to your server.\n`3.` The reindeer search for their reindeer pen channel every minute, just make the channel and wait `60 seconds` for them to join. Ping them to give them a carrot! Rudolph also now plays christmas music! :p\n\n\n**Bot Invites:**\n[Dasher](https://discord.com/api/oauth2/authorize?client_id=789419994910818334&permissions=34982976&scope=bot), [Dancer](https://discord.com/api/oauth2/authorize?client_id=789418944989626408&permissions=34982976&scope=bot), [Prancer](https://discord.com/api/oauth2/authorize?client_id=789454241977860128&permissions=34982976&scope=bot), [Blitzen](https://discord.com/api/oauth2/authorize?client_id=789415712280018954&permissions=34982976&scope=bot), [Comet](https://discord.com/api/oauth2/authorize?client_id=789417819929575465&permissions=34982976&scope=bot), [Cupid](https://discord.com/api/oauth2/authorize?client_id=789418381920829460&permissions=34982976&scope=bot), [Donner](https://discord.com/api/oauth2/authorize?client_id=789456116881817650&permissions=34982976&scope=bot), [Vixen](https://discord.com/api/oauth2/authorize?client_id=789455003508539393&permissions=34982976&scope=bot), [Rudolph](https://discord.com/api/oauth2/authorize?client_id=789404709366661170&permissions=34982976&scope=bot) \n\n**Support:**\n https://discord.gg/http")
                .setImage("https://media.discordapp.net/attachments/938923368000933930/1048034499734286417/9N80aDV89xsk.jpg")
                .setFooter(`Merry Crisis! | Tritan Development | https://tritan.dev`);
            message.channel.send(embed);
        }
    });
    process.on("unhandledRejection", (error) => {
        console.error(error);
    });
    reindeer.login(i);
}
