import { Function_declarationContext, Param_listContext, Function_bodyContext } from "../lr/src/yatjsParser";
import { RightResult } from ".";
import { IScopedVisitor } from "../interfaces/IScopedVisitor";

const parseParamList = (ctx: Param_listContext): string[] => {
  const id = ctx.ID();
  const rest = ctx.param_list();
  if(!rest) return id ? [id.text] : [];
  if(!id) return [...parseParamList(rest)];
  return [id.text, ...parseParamList(rest)];
}

export default class YFunction {
  private readonly paramNames: string[];
  private readonly bodyContext: Function_bodyContext;
  constructor(context: Function_declarationContext) {
      const exprs = context.param_list();
      this.paramNames = exprs ? parseParamList(exprs) : [];
      this.bodyContext = context.function_body();
    }
  call(params: RightResult[], visitor: IScopedVisitor<RightResult>) {
    this.paramNames.forEach((key, i) => visitor.define(key, params[i]));
    return visitor.visit(this.bodyContext);
  }
}