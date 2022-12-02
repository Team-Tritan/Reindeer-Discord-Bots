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
const fn = __importStar(require("../functions"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
function onReady(reindeer) {
    reindeer.on("ready", () => __awaiter(this, void 0, void 0, function* () {
        var _a, _b;
        console.log(`[${(_a = reindeer.user) === null || _a === void 0 ? void 0 : _a.tag}] Ready | ${reindeer.guilds.cache.size} guilds`);
        let broadcast;
        if (fn.isMaster(reindeer))
            broadcast = (_b = reindeer === null || reindeer === void 0 ? void 0 : reindeer.voice) === null || _b === void 0 ? void 0 : _b.createBroadcast();
        if (broadcast)
            broadcast.play(fs_1.default.createReadStream(path_1.default.join(__dirname, "../music/og_christmas.mp3")));
        yield fn.setPresence(reindeer);
        yield fn.changeRoleColor(reindeer); // only for us <33
        yield fn.joinReindeerPen(reindeer);
    }));
}
exports.default = onReady;
