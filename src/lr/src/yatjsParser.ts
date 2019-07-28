// Generated from ./src/yatjs.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { yatjsListener } from "./yatjsListener";
import { yatjsVisitor } from "./yatjsVisitor";


export class yatjsParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly OP = 17;
	public static readonly ID = 18;
	public static readonly NUMBER = 19;
	public static readonly LINE_COMMENT = 20;
	public static readonly COMMENT = 21;
	public static readonly WS = 22;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_param_list = 3;
	public static readonly RULE_return_statement = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_function_body = 6;
	public static readonly RULE_expression_list = 7;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "declaration", "param_list", "return_statement", 
		"expression", "function_body", "expression_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'const'", "'='", "','", "'return'", "'('", "')'", "'*'", 
		"'/'", "'+'", "'-'", "'?'", "':'", "'=>'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "OP", "ID", "NUMBER", "LINE_COMMENT", 
		"COMMENT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(yatjsParser._LITERAL_NAMES, yatjsParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return yatjsParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "yatjs.g4"; }

	// @Override
	public get ruleNames(): string[] { return yatjsParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return yatjsParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(yatjsParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, yatjsParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 16;
				this.statement();
				}
				}
				this.state = 19;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__1) | (1 << yatjsParser.T__5) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0));
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, yatjsParser.RULE_statement);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 23;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case yatjsParser.T__1:
				{
				this.state = 21;
				this.declaration();
				}
				break;
			case yatjsParser.T__5:
			case yatjsParser.ID:
			case yatjsParser.NUMBER:
				{
				this.state = 22;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 25;
			this.match(yatjsParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let _localctx: DeclarationContext = new DeclarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, yatjsParser.RULE_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 27;
			this.match(yatjsParser.T__1);
			this.state = 28;
			this.match(yatjsParser.ID);
			this.state = 29;
			this.match(yatjsParser.T__2);
			this.state = 30;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public param_list(): Param_listContext;
	public param_list(_p: number): Param_listContext;
	// @RuleVersion(0)
	public param_list(_p?: number): Param_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Param_listContext = new Param_listContext(this._ctx, _parentState);
		let _prevctx: Param_listContext = _localctx;
		let _startState: number = 6;
		this.enterRecursionRule(_localctx, 6, yatjsParser.RULE_param_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 33;
			this.match(yatjsParser.ID);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 40;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Param_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_param_list);
					this.state = 35;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 36;
					this.match(yatjsParser.T__3);
					this.state = 37;
					this.match(yatjsParser.ID);
					}
					}
				}
				this.state = 42;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let _localctx: Return_statementContext = new Return_statementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, yatjsParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 43;
			this.match(yatjsParser.T__4);
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__5) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0)) {
				{
				this.state = 44;
				this.expression(0);
				}
			}

			this.state = 47;
			this.match(yatjsParser.T__0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, yatjsParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				_localctx = new Brackets_expressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 50;
				this.match(yatjsParser.T__5);
				this.state = 51;
				this.expression(0);
				this.state = 52;
				this.match(yatjsParser.T__6);
				}
				break;

			case 2:
				{
				_localctx = new Function_declarationContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 54;
				this.match(yatjsParser.T__5);
				this.state = 56;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === yatjsParser.ID) {
					{
					this.state = 55;
					this.param_list(0);
					}
				}

				this.state = 58;
				this.match(yatjsParser.T__6);
				this.state = 59;
				this.match(yatjsParser.T__13);
				this.state = 60;
				this.function_body();
				}
				break;

			case 3:
				{
				_localctx = new Id_expressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 61;
				this.match(yatjsParser.ID);
				}
				break;

			case 4:
				{
				_localctx = new Number_expressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 62;
				this.match(yatjsParser.NUMBER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 91;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 89;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
					case 1:
						{
						_localctx = new Mul_expressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 65;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 66;
						this.match(yatjsParser.T__7);
						this.state = 67;
						this.expression(9);
						}
						break;

					case 2:
						{
						_localctx = new Div_expressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 68;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 69;
						this.match(yatjsParser.T__8);
						this.state = 70;
						this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new Add_expressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 71;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 72;
						this.match(yatjsParser.T__9);
						this.state = 73;
						this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new Sub_expressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 74;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 75;
						this.match(yatjsParser.T__10);
						this.state = 76;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new Three_expressionContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 77;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 78;
						this.match(yatjsParser.T__11);
						this.state = 79;
						this.expression(0);
						this.state = 80;
						this.match(yatjsParser.T__12);
						this.state = 81;
						this.expression(5);
						}
						break;

					case 6:
						{
						_localctx = new Function_callContext(new ExpressionContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 83;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 84;
						this.match(yatjsParser.T__5);
						this.state = 86;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__5) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0)) {
							{
							this.state = 85;
							this.expression_list(0);
							}
						}

						this.state = 88;
						this.match(yatjsParser.T__6);
						}
						break;
					}
					}
				}
				this.state = 93;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 8, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public function_body(): Function_bodyContext {
		let _localctx: Function_bodyContext = new Function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, yatjsParser.RULE_function_body);
		let _la: number;
		try {
			this.state = 106;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case yatjsParser.T__14:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 94;
				this.match(yatjsParser.T__14);
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__1) | (1 << yatjsParser.T__5) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0)) {
					{
					{
					this.state = 95;
					this.statement();
					}
					}
					this.state = 100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 102;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === yatjsParser.T__4) {
					{
					this.state = 101;
					this.return_statement();
					}
				}

				this.state = 104;
				this.match(yatjsParser.T__15);
				}
				break;
			case yatjsParser.T__5:
			case yatjsParser.ID:
			case yatjsParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 105;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression_list(): Expression_listContext;
	public expression_list(_p: number): Expression_listContext;
	// @RuleVersion(0)
	public expression_list(_p?: number): Expression_listContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: Expression_listContext = new Expression_listContext(this._ctx, _parentState);
		let _prevctx: Expression_listContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, yatjsParser.RULE_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 109;
			this.expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 116;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new Expression_listContext(_parentctx, _parentState);
					this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression_list);
					this.state = 111;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 112;
					this.match(yatjsParser.T__3);
					this.state = 113;
					this.expression(0);
					}
					}
				}
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 12, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 3:
			return this.param_list_sempred(_localctx as Param_listContext, predIndex);

		case 5:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);

		case 7:
			return this.expression_list_sempred(_localctx as Expression_listContext, predIndex);
		}
		return true;
	}
	private param_list_sempred(_localctx: Param_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return this.precpred(this._ctx, 8);

		case 2:
			return this.precpred(this._ctx, 7);

		case 3:
			return this.precpred(this._ctx, 6);

		case 4:
			return this.precpred(this._ctx, 5);

		case 5:
			return this.precpred(this._ctx, 4);

		case 6:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}
	private expression_list_sempred(_localctx: Expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x18z\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x03\x02\x06\x02\x14\n\x02\r\x02\x0E\x02\x15" +
		"\x03\x03\x03\x03\x05\x03\x1A\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x07" +
		"\x05)\n\x05\f\x05\x0E\x05,\v\x05\x03\x06\x03\x06\x05\x060\n\x06\x03\x06" +
		"\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07" +
		";\n\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07B\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x05\x07Y\n\x07\x03\x07\x07\x07\\\n\x07\f\x07\x0E\x07" +
		"_\v\x07\x03\b\x03\b\x07\bc\n\b\f\b\x0E\bf\v\b\x03\b\x05\bi\n\b\x03\b\x03" +
		"\b\x05\bm\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x07\tu\n\t\f\t\x0E\t" +
		"x\v\t\x03\t\x02\x02\x05\b\f\x10\n\x02\x02\x04\x02\x06\x02\b\x02\n\x02" +
		"\f\x02\x0E\x02\x10\x02\x02\x02\x02\x84\x02\x13\x03\x02\x02\x02\x04\x19" +
		"\x03\x02\x02\x02\x06\x1D\x03\x02\x02\x02\b\"\x03\x02\x02\x02\n-\x03\x02" +
		"\x02\x02\fA\x03\x02\x02\x02\x0El\x03\x02\x02\x02\x10n\x03\x02\x02\x02" +
		"\x12\x14\x05\x04\x03\x02\x13\x12\x03\x02\x02\x02\x14\x15\x03\x02\x02\x02" +
		"\x15\x13\x03\x02\x02\x02\x15\x16\x03\x02\x02\x02\x16\x03\x03\x02\x02\x02" +
		"\x17\x1A\x05\x06\x04\x02\x18\x1A\x05\f\x07\x02\x19\x17\x03\x02\x02\x02" +
		"\x19\x18\x03\x02\x02\x02\x1A\x1B\x03\x02\x02\x02\x1B\x1C\x07\x03\x02\x02" +
		"\x1C\x05\x03\x02\x02\x02\x1D\x1E\x07\x04\x02\x02\x1E\x1F\x07\x14\x02\x02" +
		"\x1F \x07\x05\x02\x02 !\x05\f\x07\x02!\x07\x03\x02\x02\x02\"#\b\x05\x01" +
		"\x02#$\x07\x14\x02\x02$*\x03\x02\x02\x02%&\f\x04\x02\x02&\'\x07\x06\x02" +
		"\x02\')\x07\x14\x02\x02(%\x03\x02\x02\x02),\x03\x02\x02\x02*(\x03\x02" +
		"\x02\x02*+\x03\x02\x02\x02+\t\x03\x02\x02\x02,*\x03\x02\x02\x02-/\x07" +
		"\x07\x02\x02.0\x05\f\x07\x02/.\x03\x02\x02\x02/0\x03\x02\x02\x0201\x03" +
		"\x02\x02\x0212\x07\x03\x02\x022\v\x03\x02\x02\x0234\b\x07\x01\x0245\x07" +
		"\b\x02\x0256\x05\f\x07\x0267\x07\t\x02\x027B\x03\x02\x02\x028:\x07\b\x02" +
		"\x029;\x05\b\x05\x02:9\x03\x02\x02\x02:;\x03\x02\x02\x02;<\x03\x02\x02" +
		"\x02<=\x07\t\x02\x02=>\x07\x10\x02\x02>B\x05\x0E\b\x02?B\x07\x14\x02\x02" +
		"@B\x07\x15\x02\x02A3\x03\x02\x02\x02A8\x03\x02\x02\x02A?\x03\x02\x02\x02" +
		"A@\x03\x02\x02\x02B]\x03\x02\x02\x02CD\f\n\x02\x02DE\x07\n\x02\x02E\\" +
		"\x05\f\x07\vFG\f\t\x02\x02GH\x07\v\x02\x02H\\\x05\f\x07\nIJ\f\b\x02\x02" +
		"JK\x07\f\x02\x02K\\\x05\f\x07\tLM\f\x07\x02\x02MN\x07\r\x02\x02N\\\x05" +
		"\f\x07\bOP\f\x06\x02\x02PQ\x07\x0E\x02\x02QR\x05\f\x07\x02RS\x07\x0F\x02" +
		"\x02ST\x05\f\x07\x07T\\\x03\x02\x02\x02UV\f\v\x02\x02VX\x07\b\x02\x02" +
		"WY\x05\x10\t\x02XW\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02\x02" +
		"Z\\\x07\t\x02\x02[C\x03\x02\x02\x02[F\x03\x02\x02\x02[I\x03\x02\x02\x02" +
		"[L\x03\x02\x02\x02[O\x03\x02\x02\x02[U\x03\x02\x02\x02\\_\x03\x02\x02" +
		"\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\r\x03\x02\x02\x02_]\x03\x02" +
		"\x02\x02`d\x07\x11\x02\x02ac\x05\x04\x03\x02ba\x03\x02\x02\x02cf\x03\x02" +
		"\x02\x02db\x03\x02\x02\x02de\x03\x02\x02\x02eh\x03\x02\x02\x02fd\x03\x02" +
		"\x02\x02gi\x05\n\x06\x02hg\x03\x02\x02\x02hi\x03\x02\x02\x02ij\x03\x02" +
		"\x02\x02jm\x07\x12\x02\x02km\x05\f\x07\x02l`\x03\x02\x02\x02lk\x03\x02" +
		"\x02\x02m\x0F\x03\x02\x02\x02no\b\t\x01\x02op\x05\f\x07\x02pv\x03\x02" +
		"\x02\x02qr\f\x04\x02\x02rs\x07\x06\x02\x02su\x05\f\x07\x02tq\x03\x02\x02" +
		"\x02ux\x03\x02\x02\x02vt\x03\x02\x02\x02vw\x03\x02\x02\x02w\x11\x03\x02" +
		"\x02\x02xv\x03\x02\x02\x02\x0F\x15\x19*/:AX[]dhlv";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!yatjsParser.__ATN) {
			yatjsParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(yatjsParser._serializedATN));
		}

		return yatjsParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_program; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public declaration(): DeclarationContext | undefined {
		return this.tryGetRuleContext(0, DeclarationContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_statement; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(yatjsParser.ID, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_declaration; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterDeclaration) {
			listener.enterDeclaration(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitDeclaration) {
			listener.exitDeclaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitDeclaration) {
			return visitor.visitDeclaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Param_listContext extends ParserRuleContext {
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	public ID(): TerminalNode { return this.getToken(yatjsParser.ID, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_param_list; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterParam_list) {
			listener.enterParam_list(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitParam_list) {
			listener.exitParam_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitParam_list) {
			return visitor.visitParam_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_return_statement; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterReturn_statement) {
			listener.enterReturn_statement(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitReturn_statement) {
			listener.exitReturn_statement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitReturn_statement) {
			return visitor.visitReturn_statement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_expression; }
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class Brackets_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterBrackets_expression) {
			listener.enterBrackets_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitBrackets_expression) {
			listener.exitBrackets_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitBrackets_expression) {
			return visitor.visitBrackets_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Function_callContext extends ExpressionContext {
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterFunction_call) {
			listener.enterFunction_call(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitFunction_call) {
			listener.exitFunction_call(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitFunction_call) {
			return visitor.visitFunction_call(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Mul_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterMul_expression) {
			listener.enterMul_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitMul_expression) {
			listener.exitMul_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitMul_expression) {
			return visitor.visitMul_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Div_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterDiv_expression) {
			listener.enterDiv_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitDiv_expression) {
			listener.exitDiv_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitDiv_expression) {
			return visitor.visitDiv_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Add_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterAdd_expression) {
			listener.enterAdd_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitAdd_expression) {
			listener.exitAdd_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitAdd_expression) {
			return visitor.visitAdd_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Sub_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterSub_expression) {
			listener.enterSub_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitSub_expression) {
			listener.exitSub_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitSub_expression) {
			return visitor.visitSub_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Three_expressionContext extends ExpressionContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterThree_expression) {
			listener.enterThree_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitThree_expression) {
			listener.exitThree_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitThree_expression) {
			return visitor.visitThree_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Function_declarationContext extends ExpressionContext {
	public function_body(): Function_bodyContext {
		return this.getRuleContext(0, Function_bodyContext);
	}
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterFunction_declaration) {
			listener.enterFunction_declaration(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitFunction_declaration) {
			listener.exitFunction_declaration(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitFunction_declaration) {
			return visitor.visitFunction_declaration(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Id_expressionContext extends ExpressionContext {
	public ID(): TerminalNode { return this.getToken(yatjsParser.ID, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterId_expression) {
			listener.enterId_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitId_expression) {
			listener.exitId_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitId_expression) {
			return visitor.visitId_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class Number_expressionContext extends ExpressionContext {
	public NUMBER(): TerminalNode { return this.getToken(yatjsParser.NUMBER, 0); }
	constructor(ctx: ExpressionContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterNumber_expression) {
			listener.enterNumber_expression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitNumber_expression) {
			listener.exitNumber_expression(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitNumber_expression) {
			return visitor.visitNumber_expression(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Function_bodyContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public return_statement(): Return_statementContext | undefined {
		return this.tryGetRuleContext(0, Return_statementContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_function_body; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterFunction_body) {
			listener.enterFunction_body(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitFunction_body) {
			listener.exitFunction_body(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitFunction_body) {
			return visitor.visitFunction_body(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class Expression_listContext extends ParserRuleContext {
	public expression_list(): Expression_listContext | undefined {
		return this.tryGetRuleContext(0, Expression_listContext);
	}
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_expression_list; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterExpression_list) {
			listener.enterExpression_list(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitExpression_list) {
			listener.exitExpression_list(this);
		}
	}
	// @Override
	public accept<Result>(visitor: yatjsVisitor<Result>): Result {
		if (visitor.visitExpression_list) {
			return visitor.visitExpression_list(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


