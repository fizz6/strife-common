import Base from '@fizz6/strife/src/Entity';
import Scene from './Scene';
import Hierarchy from '../components/Hierarchy';

export default class Entity extends Base<Entity> {
    
    public get hierarchy(): Hierarchy {
        return this.m_hierarchy;
    }
    private m_hierarchy: Hierarchy;
    
    public constructor(scene: Scene) {
        super(scene);
        this.m_hierarchy = this.components.add(Hierarchy);
    }
    
}