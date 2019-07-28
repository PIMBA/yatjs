export interface IScope<TResult>{
  isGlobal: () => boolean;
  
  enter: () => IScope<TResult>;
  exit: () => IScope<TResult> | undefined;
  
  define: (key: string, value: TResult) => this;
  get: (key: string) => TResult | undefined;
  has: (key: string) => boolean;
  set: (key: string, value: TResult) => this;
}