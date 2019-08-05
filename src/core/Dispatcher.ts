import Base, { Callback as BaseCallback } from '@fizz6/strife/src/Dispatcher';
import { Entity } from './Entity';
import { Event } from './Event';

export type Callback<Entity, EventType extends Event> = (event: EventType) => void;

export class Dispatcher extends Base<Entity> {}
