import Base, { Constructor as BaseConstructor } from '@fizz6/strife/src/Component';
import Entity from './Entity';

export type Constructor<ComponentType extends Component> = new (entity: Entity) => ComponentType;

export default class Component extends Base<Entity> {
    
}