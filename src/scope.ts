import { IScope } from "./interfaces/IScope";

export class Scope<T> implements IScope<T>{
  private current: Map<string, T> = new Map<string, T>();
  constructor(private parent?: IScope<T>) {}

  isGlobal = () => !this.parent;

  enter = (): IScope<T> => new Scope<T>(this);
  exit = () => this.parent;

  define(key: string, value: T): this {
    if(this.current.has(key)) throw new Error(key + ' is already defined');
    this.current.set(key, value);
    return this;
  }

  get(key: string, defaultValue: T): T {
    if (this.current.has(key)) return this.current.get(key) || defaultValue;
    if (this.parent) return this.parent.get(key, defaultValue);
    return defaultValue;
  }
  has(key: string): boolean {
    if (this.current.has(key)) return true;
    if (this.parent) return this.parent.has(key);
    return false;
  }
  set(key: string, value: T): this {
    if (this.current.has(key)) {
      this.set(key, value);
      return this;
    }
    if(this.parent) {
      this.parent.set(key, value);
      return this;
    }
    throw new Error(key + 'is not defined');
  }
}