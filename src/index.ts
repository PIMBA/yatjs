import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { yatjsLexer as Lexer } from './lr/src/yatjsLexer';
import { yatjsParser as Parser } from './lr/src/yatjsParser';
import Visitor from './visitor';
import { RightResult } from './types';

export default (text: string) => {
  const inputStream = new ANTLRInputStream(text);
  const lexer = new Lexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new Parser(tokenStream);

  const tree = parser.program();

  const globalVisitor = new Visitor();
  
  return tree.accept<RightResult>(globalVisitor);
}