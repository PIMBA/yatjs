import { Function_declarationContext, Param_listContext, Function_bodyContext } from "../lr/src/yatjsParser";
import { RightResult } from ".";
import { IScope } from "../interfaces/IScope";
import Visitor from "../visitor";

const resolveParamList = (ctx: Param_listContext): string[] => {
  const id = ctx.ID();
  const rest = ctx.param_list();
  if(!rest) return id ? [id.text] : [];
  if(!id) return [...resolveParamList(rest)];
  return [id.text, ...resolveParamList(rest)];
}

export default class YFunction {
  private readonly paramNames: string[];
  private readonly bodyContext: Function_bodyContext;
  constructor(context: Function_declarationContext, private scope: IScope<RightResult>) {
    const exprs = context.param_list();
    this.paramNames = exprs ? resolveParamList(exprs) : [];
    this.bodyContext = context.function_body();
  }
  call(params: RightResult[]) {
    const funcVisitor = new Visitor(this.scope);
    this.paramNames.forEach((key, i) => funcVisitor.define(key, params[i]));
    return funcVisitor.visit(this.bodyContext);
  }
}