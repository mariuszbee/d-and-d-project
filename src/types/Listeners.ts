import { Project } from './Project';

export type Listener<T> = (items: T[]) => void;
