"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Component_1 = require("../core/Component");
const three_1 = require("three");
let Transform = class Transform extends Component_1.default {
    constructor() {
        super(...arguments);
        this.matrix = new three_1.Matrix4();
    }
    get position() {
        const position = new three_1.Vector3();
        this.matrix.decompose(position);
        return position;
    }
    set position(position) {
        this.matrix.setPosition(position);
    }
    translate(translation) {
        const translationMatrix = new three_1.Matrix4().makeTranslation(translation.x, translation.y, translation.z);
        this.matrix.multiply(translationMatrix);
    }
};
Transform = __decorate([
    Component_1.default.Register
], Transform);
exports.default = Transform;
