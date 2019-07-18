// Generated from ./src/yatjs.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./yatjsParser";
import { StatementContext } from "./yatjsParser";
import { DeclarationContext } from "./yatjsParser";
import { Param_listContext } from "./yatjsParser";
import { Return_statementContext } from "./yatjsParser";
import { ExpressionContext } from "./yatjsParser";
import { Function_declarationContext } from "./yatjsParser";
import { Function_bodyContext } from "./yatjsParser";
import { Function_callContext } from "./yatjsParser";
import { Expression_listContext } from "./yatjsParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `yatjsParser`.
 */
export interface yatjsListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `yatjsParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.param_list`.
	 * @param ctx the parse tree
	 */
	enterParam_list?: (ctx: Param_listContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.param_list`.
	 * @param ctx the parse tree
	 */
	exitParam_list?: (ctx: Param_listContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.function_body`.
	 * @param ctx the parse tree
	 */
	enterFunction_body?: (ctx: Function_bodyContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.function_body`.
	 * @param ctx the parse tree
	 */
	exitFunction_body?: (ctx: Function_bodyContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `yatjsParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `yatjsParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;
}

