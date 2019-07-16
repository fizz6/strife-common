"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../core/Component");
let Hierarchy = class Hierarchy extends Component_1.default {
    constructor() {
        super(...arguments);
        this.m_children = [];
    }
    get parent() {
        return this.m_parent;
    }
    set parent(parent) {
        if (this.m_parent == parent)
            return;
        if (parent)
            parent.Hierarchy.children.push(this.Entity);
        if (this.m_parent)
            this.m_parent.Hierarchy.m_children.splice(this.m_parent.Hierarchy.m_children.indexOf(this.Entity));
        this.m_parent = parent;
    }
    get children() {
        return this.m_children;
    }
};
Hierarchy = __decorate([
    Component_1.default.Register
], Hierarchy);
exports.default = Hierarchy;
