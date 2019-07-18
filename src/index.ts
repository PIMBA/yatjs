import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import { readFileSync } from 'fs';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { yatjsLexer as Lexer } from './lr/src/yatjsLexer';
import { yatjsParser as Parser } from './lr/src/yatjsParser';
import { yatjsListener as BaseListener } from './lr/src/yatjsListener';

// Create the lexer and parser
const text = readFileSync('../test/index.yjs', 'utf-8');
const inputStream = new ANTLRInputStream(text);
const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
const parser = new Parser(tokenStream);

const tree = parser.program();

class Listener implements BaseListener {
  // other enterX functions...
}

const listener = new Listener();
ParseTreeWalker.DEFAULT.walk(listener, tree);