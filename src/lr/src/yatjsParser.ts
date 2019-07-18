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
	public static readonly OP = 13;
	public static readonly ID = 14;
	public static readonly NUMBER = 15;
	public static readonly LINE_COMMENT = 16;
	public static readonly COMMENT = 17;
	public static readonly WS = 18;
	public static readonly RULE_program = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_param_list = 3;
	public static readonly RULE_return_statement = 4;
	public static readonly RULE_expression = 5;
	public static readonly RULE_function_declaration = 6;
	public static readonly RULE_function_body = 7;
	public static readonly RULE_function_call = 8;
	public static readonly RULE_expression_list = 9;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "statement", "declaration", "param_list", "return_statement", 
		"expression", "function_declaration", "function_body", "function_call", 
		"expression_list",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "';'", "'const'", "'='", "','", "'return'", "'?'", "':'", "'('", 
		"')'", "'=>'", "'{'", "'}'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, "OP", 
		"ID", "NUMBER", "LINE_COMMENT", "COMMENT", "WS",
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
			this.state = 21;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 20;
				this.statement();
				}
				}
				this.state = 23;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__1) | (1 << yatjsParser.T__7) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0));
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
			this.state = 27;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case yatjsParser.T__1:
				{
				this.state = 25;
				this.declaration();
				}
				break;
			case yatjsParser.T__7:
			case yatjsParser.ID:
			case yatjsParser.NUMBER:
				{
				this.state = 26;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 29;
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
			this.state = 31;
			this.match(yatjsParser.T__1);
			this.state = 32;
			this.match(yatjsParser.ID);
			this.state = 33;
			this.match(yatjsParser.T__2);
			this.state = 34;
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
			this.state = 38;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				{
				}
				break;

			case 2:
				{
				this.state = 37;
				this.match(yatjsParser.ID);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 45;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
					this.state = 40;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 41;
					this.match(yatjsParser.T__3);
					this.state = 42;
					this.match(yatjsParser.ID);
					}
					}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
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
			this.state = 48;
			this.match(yatjsParser.T__4);
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__7) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0)) {
				{
				this.state = 49;
				this.expression(0);
				}
			}

			this.state = 52;
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 63;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				{
				this.state = 55;
				this.match(yatjsParser.T__7);
				this.state = 56;
				this.expression(0);
				this.state = 57;
				this.match(yatjsParser.T__8);
				}
				break;

			case 2:
				{
				this.state = 59;
				this.function_call();
				}
				break;

			case 3:
				{
				this.state = 60;
				this.function_declaration();
				}
				break;

			case 4:
				{
				this.state = 61;
				this.match(yatjsParser.ID);
				}
				break;

			case 5:
				{
				this.state = 62;
				this.match(yatjsParser.NUMBER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 76;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 74;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 65;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 66;
						this.match(yatjsParser.OP);
						this.state = 67;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, yatjsParser.RULE_expression);
						this.state = 68;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 69;
						this.match(yatjsParser.T__5);
						this.state = 70;
						this.expression(0);
						this.state = 71;
						this.match(yatjsParser.T__6);
						this.state = 72;
						this.expression(7);
						}
						break;
					}
					}
				}
				this.state = 78;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 7, this._ctx);
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
	public function_declaration(): Function_declarationContext {
		let _localctx: Function_declarationContext = new Function_declarationContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, yatjsParser.RULE_function_declaration);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 79;
			this.match(yatjsParser.T__7);
			this.state = 80;
			this.param_list(0);
			this.state = 81;
			this.match(yatjsParser.T__8);
			this.state = 82;
			this.match(yatjsParser.T__9);
			this.state = 83;
			this.function_body();
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
	public function_body(): Function_bodyContext {
		let _localctx: Function_bodyContext = new Function_bodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, yatjsParser.RULE_function_body);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case yatjsParser.T__10:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 85;
				this.match(yatjsParser.T__10);
				this.state = 89;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << yatjsParser.T__1) | (1 << yatjsParser.T__7) | (1 << yatjsParser.ID) | (1 << yatjsParser.NUMBER))) !== 0)) {
					{
					{
					this.state = 86;
					this.statement();
					}
					}
					this.state = 91;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === yatjsParser.T__4) {
					{
					this.state = 92;
					this.return_statement();
					}
				}

				this.state = 95;
				this.match(yatjsParser.T__11);
				}
				break;
			case yatjsParser.T__7:
			case yatjsParser.ID:
			case yatjsParser.NUMBER:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 96;
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
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let _localctx: Function_callContext = new Function_callContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, yatjsParser.RULE_function_call);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(yatjsParser.ID);
			this.state = 100;
			this.match(yatjsParser.T__7);
			this.state = 101;
			this.expression_list(0);
			this.state = 102;
			this.match(yatjsParser.T__8);
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
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, yatjsParser.RULE_expression_list, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 105;
			this.expression(0);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 112;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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
					this.state = 107;
					if (!(this.precpred(this._ctx, 2))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
					}
					this.state = 108;
					this.match(yatjsParser.T__3);
					this.state = 109;
					this.expression(0);
					}
					}
				}
				this.state = 114;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 11, this._ctx);
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

		case 9:
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
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private expression_list_sempred(_localctx: Expression_listContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14v\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x03\x02\x06\x02\x18\n\x02" +
		"\r\x02\x0E\x02\x19\x03\x03\x03\x03\x05\x03\x1E\n\x03\x03\x03\x03\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x05\x03\x05\x05\x05)\n\x05\x03" +
		"\x05\x03\x05\x03\x05\x07\x05.\n\x05\f\x05\x0E\x051\v\x05\x03\x06\x03\x06" +
		"\x05\x065\n\x06\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07B\n\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07M\n\x07\f\x07" +
		"\x0E\x07P\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x07\t" +
		"Z\n\t\f\t\x0E\t]\v\t\x03\t\x05\t`\n\t\x03\t\x03\t\x05\td\n\t\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\vq\n\v\f" +
		"\v\x0E\vt\v\v\x03\v\x02\x02\x05\b\f\x14\f\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x02\x02\x02z\x02\x17\x03" +
		"\x02\x02\x02\x04\x1D\x03\x02\x02\x02\x06!\x03\x02\x02\x02\b(\x03\x02\x02" +
		"\x02\n2\x03\x02\x02\x02\fA\x03\x02\x02\x02\x0EQ\x03\x02\x02\x02\x10c\x03" +
		"\x02\x02\x02\x12e\x03\x02\x02\x02\x14j\x03\x02\x02\x02\x16\x18\x05\x04" +
		"\x03\x02\x17\x16\x03\x02\x02\x02\x18\x19\x03\x02\x02\x02\x19\x17\x03\x02" +
		"\x02\x02\x19\x1A\x03\x02\x02\x02\x1A\x03\x03\x02\x02\x02\x1B\x1E\x05\x06" +
		"\x04\x02\x1C\x1E\x05\f\x07\x02\x1D\x1B\x03\x02\x02\x02\x1D\x1C\x03\x02" +
		"\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F \x07\x03\x02\x02 \x05\x03\x02\x02" +
		"\x02!\"\x07\x04\x02\x02\"#\x07\x10\x02\x02#$\x07\x05\x02\x02$%\x05\f\x07" +
		"\x02%\x07\x03\x02\x02\x02&)\b\x05\x01\x02\')\x07\x10\x02\x02(&\x03\x02" +
		"\x02\x02(\'\x03\x02\x02\x02)/\x03\x02\x02\x02*+\f\x04\x02\x02+,\x07\x06" +
		"\x02\x02,.\x07\x10\x02\x02-*\x03\x02\x02\x02.1\x03\x02\x02\x02/-\x03\x02" +
		"\x02\x02/0\x03\x02\x02\x020\t\x03\x02\x02\x021/\x03\x02\x02\x0224\x07" +
		"\x07\x02\x0235\x05\f\x07\x0243\x03\x02\x02\x0245\x03\x02\x02\x0256\x03" +
		"\x02\x02\x0267\x07\x03\x02\x027\v\x03\x02\x02\x0289\b\x07\x01\x029:\x07" +
		"\n\x02\x02:;\x05\f\x07\x02;<\x07\v\x02\x02<B\x03\x02\x02\x02=B\x05\x12" +
		"\n\x02>B\x05\x0E\b\x02?B\x07\x10\x02\x02@B\x07\x11\x02\x02A8\x03\x02\x02" +
		"\x02A=\x03\x02\x02\x02A>\x03\x02\x02\x02A?\x03\x02\x02\x02A@\x03\x02\x02" +
		"\x02BN\x03\x02\x02\x02CD\f\t\x02\x02DE\x07\x0F\x02\x02EM\x05\f\x07\nF" +
		"G\f\b\x02\x02GH\x07\b\x02\x02HI\x05\f\x07\x02IJ\x07\t\x02\x02JK\x05\f" +
		"\x07\tKM\x03\x02\x02\x02LC\x03\x02\x02\x02LF\x03\x02\x02\x02MP\x03\x02" +
		"\x02\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\r\x03\x02\x02\x02PN\x03" +
		"\x02\x02\x02QR\x07\n\x02\x02RS\x05\b\x05\x02ST\x07\v\x02\x02TU\x07\f\x02" +
		"\x02UV\x05\x10\t\x02V\x0F\x03\x02\x02\x02W[\x07\r\x02\x02XZ\x05\x04\x03" +
		"\x02YX\x03\x02\x02\x02Z]\x03\x02\x02\x02[Y\x03\x02\x02\x02[\\\x03\x02" +
		"\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02^`\x05\n\x06\x02_^\x03\x02" +
		"\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02ad\x07\x0E\x02\x02bd\x05\f" +
		"\x07\x02cW\x03\x02\x02\x02cb\x03\x02\x02\x02d\x11\x03\x02\x02\x02ef\x07" +
		"\x10\x02\x02fg\x07\n\x02\x02gh\x05\x14\v\x02hi\x07\v\x02\x02i\x13\x03" +
		"\x02\x02\x02jk\b\v\x01\x02kl\x05\f\x07\x02lr\x03\x02\x02\x02mn\f\x04\x02" +
		"\x02no\x07\x06\x02\x02oq\x05\f\x07\x02pm\x03\x02\x02\x02qt\x03\x02\x02" +
		"\x02rp\x03\x02\x02\x02rs\x03\x02\x02\x02s\x15\x03\x02\x02\x02tr\x03\x02" +
		"\x02\x02\x0E\x19\x1D(/4ALN[_cr";
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
}


export class Param_listContext extends ParserRuleContext {
	public param_list(): Param_listContext | undefined {
		return this.tryGetRuleContext(0, Param_listContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(yatjsParser.ID, 0); }
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
}


export class ExpressionContext extends ParserRuleContext {
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public OP(): TerminalNode | undefined { return this.tryGetToken(yatjsParser.OP, 0); }
	public function_call(): Function_callContext | undefined {
		return this.tryGetRuleContext(0, Function_callContext);
	}
	public function_declaration(): Function_declarationContext | undefined {
		return this.tryGetRuleContext(0, Function_declarationContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(yatjsParser.ID, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(yatjsParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_expression; }
	// @Override
	public enterRule(listener: yatjsListener): void {
		if (listener.enterExpression) {
			listener.enterExpression(this);
		}
	}
	// @Override
	public exitRule(listener: yatjsListener): void {
		if (listener.exitExpression) {
			listener.exitExpression(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	public param_list(): Param_listContext {
		return this.getRuleContext(0, Param_listContext);
	}
	public function_body(): Function_bodyContext {
		return this.getRuleContext(0, Function_bodyContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_function_declaration; }
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
}


export class Function_callContext extends ParserRuleContext {
	public ID(): TerminalNode { return this.getToken(yatjsParser.ID, 0); }
	public expression_list(): Expression_listContext {
		return this.getRuleContext(0, Expression_listContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return yatjsParser.RULE_function_call; }
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
}


