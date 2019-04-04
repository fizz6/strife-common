"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("@fizz6/strife/src/Entity");
const Hierarchy_1 = require("../components/Hierarchy");
class Entity extends Entity_1.default {
    get hierarchy() {
        return this.m_hierarchy;
    }
    constructor(scene) {
        super(scene);
        this.m_hierarchy = this.components.add(Hierarchy_1.default);
    }
}
exports.default = Entity;
