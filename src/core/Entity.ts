import Base from '@fizz6/strife/src/Entity';
import { Scene } from './Scene';
import { Hierarchy } from '../components/Hierarchy';
import { Transform } from '../components/Transform';

export class Entity extends Base<Entity> {

    private hierarchy: Hierarchy;

    public get Hierarchy(): Hierarchy {
        return this.hierarchy;
    }

    private transform: Transform;

    public get Transform(): Transform {
        return this.transform;
    }

    public constructor(scene: Scene) {
        super(scene);
        this.hierarchy = this.components.add(Hierarchy);
        this.transform = this.components.add(Transform);
    }

}
