"use strict";
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
exports.joinReindeerPen = exports.changeRoleColor = exports.setPresence = exports.attachListeners = exports.isMaster = void 0;
const config_1 = require("../../config");
const ready_1 = __importDefault(require("../events/ready"));
const message_1 = __importDefault(require("../events/message"));
// checks for Rudolph ID
function isMaster(reindeer) {
    var _a, _b;
    if (((_a = reindeer === null || reindeer === void 0 ? void 0 : reindeer.user) === null || _a === void 0 ? void 0 : _a.id) === config_1.data.master_id)
        return true;
    if (((_b = reindeer === null || reindeer === void 0 ? void 0 : reindeer.user) === null || _b === void 0 ? void 0 : _b.id) !== config_1.data.master_id)
        return false;
}
exports.isMaster = isMaster;
// attach listeners
function attachListeners(reindeer) {
    (0, ready_1.default)(reindeer);
    (0, message_1.default)(reindeer);
    process.on("unhandledRejection", (error) => {
        console.error(error);
    });
}
exports.attachListeners = attachListeners;
// Duh
function setPresence(reindeer) {
    return __awaiter(this, void 0, void 0, function* () {
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (isMaster(reindeer)) {
                (_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.setPresence({
                    activity: {
                        name: `EDM christmas music today! | @mention help`,
                    },
                    status: "dnd",
                });
            }
            else {
                (_b = reindeer.user) === null || _b === void 0 ? void 0 : _b.setPresence({
                    activity: {
                        name: `getting ready for christmas! | @mention help`,
                    },
                    status: "idle",
                });
                console.log(`[${(_c = reindeer.user) === null || _c === void 0 ? void 0 : _c.tag}] Presence Updated`);
            }
        }), 120000);
    });
}
exports.setPresence = setPresence;
// only for us <33
function changeRoleColor(reindeer) {
    return __awaiter(this, void 0, void 0, function* () {
        if (isMaster(reindeer))
            setInterval(() => {
                var _a;
                let g = reindeer.guilds.cache.get("935395886761140264");
                let role = g === null || g === void 0 ? void 0 : g.roles.cache.find((r) => r.name === "Reindeer");
                let colors = ["#ff0000", "#009d07", "94ee3f", "#ba4747"];
                let random = Math.floor(Math.random() * colors.length);
                try {
                    role === null || role === void 0 ? void 0 : role.setColor(colors[random]);
                    console.log(`[${(_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.tag}] changed color in Tritan Server`);
                }
                catch (e) {
                    console.error("ERROR CHANGING ROLE COLOR: \n", e);
                }
            }, 60000);
    });
}
exports.changeRoleColor = changeRoleColor;
// join the reindeer pen and handle connection
function joinReindeerPen(reindeer) {
    return __awaiter(this, void 0, void 0, function* () {
        setInterval(() => {
            reindeer.guilds.cache.forEach((g) => {
                let ch = g.channels.cache.find((channel) => channel.name.toLowerCase() === "reindeer pen" &&
                    channel.type === "voice");
                if (ch)
                    //@ts-ignore
                    ch.join()
                        .then((ctx) => __awaiter(this, void 0, void 0, function* () {
                        var _a, _b, _c, _d, _e;
                        console.log(`[${(_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.tag}] joined reindeer pen for ${g.name} (${g.id})`);
                        if (isMaster(reindeer)) {
                            //@ts-ignore
                            ctx.play((_b = reindeer.voice) === null || _b === void 0 ? void 0 : _b.broadcasts[0], {
                                highWaterMark: 25,
                                bitrate: 384,
                            });
                            console.log(`[${(_c = reindeer.user) === null || _c === void 0 ? void 0 : _c.tag}] Playing music in ${g.name} (${g.id}`);
                        }
                        else {
                            (_d = ctx === null || ctx === void 0 ? void 0 : ctx.voice) === null || _d === void 0 ? void 0 : _d.setSelfDeaf(true);
                            `[${(_e = reindeer.user) === null || _e === void 0 ? void 0 : _e.tag}] Deafened in ${g.name} (${g.id}`;
                        }
                    }))
                        .catch((e) => {
                        var _a;
                        console.error(`[${(_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.tag}] FAILED to join reindeer pen for ${g.name} (${g.id})`);
                    });
            });
        }, 60000);
    });
}
exports.joinReindeerPen = joinReindeerPen;
