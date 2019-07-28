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

param_list
  :param_list ',' ID
  | ID
  ;

return_statement
  : 'return' expression? ';'
  ;

expression
  : '(' expression ')' #brackets_expression
  | expression '(' expression_list? ')' #function_call
  | expression '*' expression #mul_expression
  | expression '/' expression #div_expression
  | expression '+' expression #add_expression
  | expression '-' expression #sub_expression
  | expression '?' expression ':' expression #three_expression
  | '(' param_list? ')' '=>' function_body #function_declaration
  | ID #id_expression
  | NUMBER #number_expression
  ;

function_body
  : '{' statement* return_statement? '}'
  | expression
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