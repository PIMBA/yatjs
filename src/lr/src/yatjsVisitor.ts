// Generated from ./src/yatjs.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { Brackets_expressionContext } from "./yatjsParser";
import { Function_callContext } from "./yatjsParser";
import { Mul_expressionContext } from "./yatjsParser";
import { Div_expressionContext } from "./yatjsParser";
import { Add_expressionContext } from "./yatjsParser";
import { Sub_expressionContext } from "./yatjsParser";
import { Three_expressionContext } from "./yatjsParser";
import { Function_declarationContext } from "./yatjsParser";
import { Id_expressionContext } from "./yatjsParser";
import { Number_expressionContext } from "./yatjsParser";
import { ProgramContext } from "./yatjsParser";
import { StatementContext } from "./yatjsParser";
import { DeclarationContext } from "./yatjsParser";
import { Param_listContext } from "./yatjsParser";
import { Return_statementContext } from "./yatjsParser";
import { ExpressionContext } from "./yatjsParser";
import { Function_bodyContext } from "./yatjsParser";
import { Expression_listContext } from "./yatjsParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `yatjsParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface yatjsVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `brackets_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBrackets_expression?: (ctx: Brackets_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `function_call`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_call?: (ctx: Function_callContext) => Result;

	/**
	 * Visit a parse tree produced by the `mul_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMul_expression?: (ctx: Mul_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `div_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDiv_expression?: (ctx: Div_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `add_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdd_expression?: (ctx: Add_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `sub_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSub_expression?: (ctx: Sub_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `three_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThree_expression?: (ctx: Three_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `function_declaration`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_declaration?: (ctx: Function_declarationContext) => Result;

	/**
	 * Visit a parse tree produced by the `id_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitId_expression?: (ctx: Id_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by the `number_expression`
	 * labeled alternative in `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber_expression?: (ctx: Number_expressionContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.declaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDeclaration?: (ctx: DeclarationContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.param_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParam_list?: (ctx: Param_listContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.return_statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_statement?: (ctx: Return_statementContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.function_body`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunction_body?: (ctx: Function_bodyContext) => Result;

	/**
	 * Visit a parse tree produced by `yatjsParser.expression_list`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression_list?: (ctx: Expression_listContext) => Result;
}

