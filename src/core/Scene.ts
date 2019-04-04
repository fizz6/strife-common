import Base from '@fizz6/strife/src/Scene';
import Component, { Constructor as ComponentConstructor } from './Component';
import Entity from './Entity';
import Storage from './Storage';

export default class Scene extends Base<Entity, Storage<any>> {
    
    public constructor() {
        super(Entity, Storage);
    }
    
}