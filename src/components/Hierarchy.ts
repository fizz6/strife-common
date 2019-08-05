import { Optional } from '@fizz6/strife/src/Optional';
import { Component } from '../core/Component';
import { Entity } from '../core/Entity';

@Component.Register
export class Hierarchy extends Component {

    private parent?: Entity;

    public get Parent(): Optional<Entity> {
        return this.parent;
    }

    public set Parent(parent: Optional<Entity>) {
        if (this.parent == parent) return;
        if (parent) parent.Hierarchy.children.push(this.entity);
        if (this.parent) this.parent.Hierarchy.children.splice(this.parent.Hierarchy.children.indexOf(this.entity));
        this.parent = parent;
    }

    private children: Entity[] = [];

    public get Children(): Entity[] {
        return this.children;
    }

}
