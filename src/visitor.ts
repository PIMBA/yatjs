import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { DeclarationContext, ExpressionContext, Function_declarationContext, Function_bodyContext, Return_statementContext, Function_callContext, Expression_listContext, Brackets_expressionContext, Three_expressionContext, Number_expressionContext, Id_expressionContext, Add_expressionContext, Sub_expressionContext, Div_expressionContext, StatementContext, ProgramContext } from './lr/src/yatjsParser';
import { Scope } from './scope';
import YFunction from './types/YFunction';
import { RightResult } from './types';
import { IScopedVisitor } from './interfaces/IScopedVisitor';
import { IScope } from './interfaces/IScope';

export default class Visitor extends AbstractParseTreeVisitor<RightResult> implements IScopedVisitor<RightResult> {
  private lastValue: RightResult = 0;
  private scope: IScope<RightResult>;
  constructor(parent?: IScope<RightResult>) {
    super();
    this.scope = new Scope(parent);
  }

  isGlobal = () => this.scope.isGlobal();

  enter = () => this.scope.enter();

  exit = () => this.scope.exit();

  has = (key: string) => this.scope.has(key);

  set = (key: string, value: RightResult) => {
    this.scope.set(key, value);
    return this;
  }
  define = (x: string, value: RightResult) => {
    this.scope.define(x, value);
    return this;
  }
  get = (x: string, defaultValue: RightResult) => {
    return this.scope.get(x, defaultValue);
  }

  protected defaultResult = () => {
    return 0;
  }

  visitStatement = (ctx: StatementContext) => {
    const statement = ctx.declaration() || ctx.expression();
    if(statement) {
      this.lastValue = this.visit(statement);
    }
    return 0;
  }

  visitProgram = (ctx: ProgramContext) => {
    ctx.statement().forEach((statement) => this.visit(statement));
    return this.lastValue;
  }
  visitDeclaration = (ctx: DeclarationContext) => {
    const id = ctx.ID().text;
    const value = this.visit(ctx.expression());
    this.define(id, value);
    return 0;
  }

  visitBrackets_expression = (ctx: Brackets_expressionContext) => {
    return this.visit(ctx.expression());
  }
  
  visitThree_expression = (ctx: Three_expressionContext) => {
    const question = this.visit(ctx.expression(0));
    if(question !== 0) return this.visit(ctx.expression(1));
    else return this.visit(ctx.expression(2));
  }

  visitAdd_expression = (ctx: Add_expressionContext) => {
    const left = this.visit(ctx.expression(0)) as number;
    const right = this.visit(ctx.expression(1)) as number;
    return left + right;
  }
  visitSub_expression = (ctx: Sub_expressionContext) => {
    const left = this.visit(ctx.expression(0)) as number;
    const right = this.visit(ctx.expression(1)) as number;
    return left - right;
  }
  visitDiv_expression = (ctx: Div_expressionContext) => {
    const left = this.visit(ctx.expression(0)) as number;
    const right = this.visit(ctx.expression(1)) as number;
    return left / right;
  }
  visitMul_expression = (ctx: Add_expressionContext) => {
    const left = this.visit(ctx.expression(0)) as number;
    const right = this.visit(ctx.expression(1)) as number;
    return left * right;
  }

  visitNumber_expression = (ctx: Number_expressionContext) => {
    return Number(ctx.NUMBER().text);
  }

  visitId_expression = (ctx: Id_expressionContext) => {
    const id = ctx.ID();
    return this.get(id.text, 0);
  }

  visitFunction_declaration = (ctx: Function_declarationContext) => {
    return new YFunction(ctx, this.scope);
  }

  visitFunction_body = (ctx: Function_bodyContext) => {
    const inlineReturn = ctx.expression();
    if(inlineReturn) return this.visit(inlineReturn) || 0;
    ctx.statement().forEach((statement) => {
      const dec = statement.declaration();
      if(dec) this.visit(dec);
      const exp = statement.expression();
      if(exp) this.visit(exp);
    });
    const ret = ctx.return_statement();
    if(ret) return this.visit(ret) || 0;
    return 0;
  }

  visitReturn_statement = (ctx: Return_statementContext) => {
    const exp = ctx.expression();
    if(exp) return this.visit(exp) || 0;
    return 0;
  }

  visitFunction_call = (ctx: Function_callContext) => {
    const fn = this.visit(ctx.expression());
    if (fn instanceof YFunction) {
      const expLisr = ctx.expression_list();
      const ctxList = expLisr ? resolveExpressionList(expLisr) : [];
      const params = ctxList.map(ctx => this.visit(ctx));
      const res = fn.call(params);
      return res;
    }
    return 0;
  }
}

const resolveExpressionList = (ctx: Expression_listContext):ExpressionContext[] => {
  const exp = ctx.expression();
  const rest = ctx.expression_list();
  if(!rest) return [exp].filter(Boolean);
  return [exp, ...resolveExpressionList(rest)];
}