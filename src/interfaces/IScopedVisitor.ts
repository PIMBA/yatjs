import { yatjsVisitor as BaseVisitor } from "../lr/src/yatjsVisitor";
import { IScope } from "./IScope";

export interface IScopedVisitor<TResult> extends BaseVisitor<TResult>, IScope<TResult> {
}