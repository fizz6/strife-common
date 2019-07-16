"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Entity_1 = require("@fizz6/strife/src/Entity");
const Hierarchy_1 = require("../components/Hierarchy");
const Transform_1 = require("../components/Transform");
class Entity extends Entity_1.default {
    get Hierarchy() {
        return this.hierarchy;
    }
    get Transform() {
        return this.transform;
    }
    constructor(scene) {
        super(scene);
        this.hierarchy = this.Components.add(Hierarchy_1.default);
        this.transform = this.Components.add(Transform_1.default);
    }
}
exports.default = Entity;
