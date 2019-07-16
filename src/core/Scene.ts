import Base from '@fizz6/strife/src/Scene';
import Component, { Constructor as ComponentConstructor } from './Component';
import Entity from './Entity';

export default class Scene extends Base<Entity> {
    
    public constructor() {
        super(Entity);
    }
    
}