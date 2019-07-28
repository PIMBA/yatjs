import { IScope } from "./IScope";
import { IVisitor } from "./IVisitor";

export interface IScopedVisitor<TResult> extends IVisitor<TResult>, IScope<TResult> {
}