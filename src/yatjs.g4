grammar yatjs;

program
  : statement+
  ;

statement
  : (declaration | expression) ';'
  ;

declaration
  : 'const' ID '=' expression
  ;

param_list: 
  | param_list ',' ID
  | ID
  ;

return_statement
  : 'return' expression? ';'
  ;

expression
  : expression OP expression
  | expression '?' expression ':' expression
  | '(' expression ')'
  | function_call
  | function_declaration
  | ID
  | NUMBER
  ;

function_declaration
  : '(' param_list ')' '=>' function_body
  ;

function_body
  : '{' statement* return_statement? '}'
  | expression
  ;

function_call
  : ID '(' expression_list ')'
  ;

expression_list
  : expression_list ',' expression
  | expression
  ;

// Lexer

OP: '+' | '-' | '*' | '/'; // + - * /
ID : [A-Z_]+; // 变量
NUMBER : [1-9][0-9]*|[0]|([0-9]+[.][0-9]+) ; // 数字 

LINE_COMMENT : '//' .*? '\n' -> skip ; 
COMMENT : '/*' .*? '*/' -> skip ;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines