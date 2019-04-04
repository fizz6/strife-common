"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Scene_1 = require("@fizz6/strife/src/Scene");
const Entity_1 = require("./Entity");
const Storage_1 = require("./Storage");
class Scene extends Scene_1.default {
    constructor() {
        super(Entity_1.default, Storage_1.default);
    }
}
exports.default = Scene;
