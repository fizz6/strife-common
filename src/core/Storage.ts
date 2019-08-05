import Base from '@fizz6/strife/src/Storage';
import { Entity } from './Entity';
import { Component } from './Component';

export class Storage<ComponentType extends Component> extends Base<Entity, ComponentType> {}
