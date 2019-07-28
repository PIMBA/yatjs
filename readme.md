# Yet Another Tiny Javascript

> 实现一门简单的脚本语言能够让各位更加理解javascript中很多奇怪的问题以及背后的原理。

## 名词解释

### ANTLR

ANTLR（全名：ANother Tool for Language Recognition）是基于LL(*)算法实现的语法解析器生成器（parser generator），用Java语言编写，使用自上而下（top-down）的递归下降LL剖析器方法。

这次选用ANTLR主要是因为我似乎没有在js栈找到什么好使的前端。所以就选了个最好用的。

ANTLR能够大幅度减少我们编写DSL的时间，因为它可以根据我们自己定义的语法（符合EBNF）自动的生成语法解析器，然后允许我们使用visitor模式和listener模式访问生成好的AST。

### LL(*) / 递归下降

简单来说是两种不同的分析语法的策略，递归下降一般适合手写，LL(*)一般适合自动生成，具体参阅[这里](https://zh.wikipedia.org/wiki/LL%E5%89%96%E6%9E%90%E5%99%A8)。

### 前端

在语言领域，前端一般指将文本处理为AST的程序。和我们平常接触的前端意义并不相同。但值得一提的是，这两者在广义上是一样的，即和用户直接接触的程序。

### DSL

不同于普通的跨领域通用计算机语言(GPL)，DSL(领域特定语言)只用在某些特定的领域。比如用来显示网页的HTML，以及Emacs所使用的Emac LISP语言,SQL等等。

DSL只能够处理一些问题。但越专精的能力就有越大的优化空间。在未来，我们可能会有更多的DSL而不是GPL。这也是趋势之一。

### EBNF 范式

扩展巴科斯-瑙尔范式(EBNF, Extended Backus–Naur Form)。
范式，简单来说就是描述语法的语法。EBNF范式扩展自BNF范式。详细的范式可以看[这里](https://zh.wikipedia.org/wiki/%E6%89%A9%E5%B1%95%E5%B7%B4%E7%A7%91%E6%96%AF%E8%8C%83%E5%BC%8F)

### AST

抽象语法树，这是我们很常见的词语，就是将我们的文本代码转换为树型的结构，并定义每个符号的意义。转换为抽象语法树更利于我们分析和执行程序。

### Visitor / Listener

两种设计模式，listener模式比较好懂，但visitor模式比较灵活。

## installation

* 需要 java jdk > 6 *

```bash
npm install --save antlr4ts
npm install --save-dev antlr4ts-cli typescript
tsc --init
```

## develop

```bash
tsc --watch
```

## Goal1

在设计一门语言之前，我们需要知道这门DSL需要完成什么任务，才好定义它的语法规则。

由于我们这个语言以教学为目的，所以我们简单的支持一些计算的特性：

1. 解释型：我们这门语言是完全解释型的语言，并不编译到native。
2. 弱类型：我们暂时不处理类型和类型定义了。
3. 纯常量：没有 let / var, 只有 const。
4. 词法作用域：支持闭包和递归。

我们原生可以支持的类型有：`number`，非常简单。

## 简单语法

首先，我们的程序从`program`开始，而`program`由一些语句组成。
```.g4
grammar yatjs;

program
  : statement+
  ;
```
我们的语句有两种：`declaration`和`expression`。其中，`declaration`是变量的声明，而`expression`就是表达式。哦，对了，我们的语句必须由分号结尾，非常严格。
```.g4
statement
  : (declaration | expression) ';'
  ;
```
我们先定义一下`declaration`，简单的来说就是 id = 表达式：
```.g4
declaration
  : 'const' ID '=' expression
  ;
```
这里也出现了`expression`,所以我们接下来定义一下`expression`。
一个表达式可以是以下几种情况：
 1. 表达式 加减乘除 表达式 -> 运算
 2. 表达式 ? 表达式 ':' 表达式 -> 三目运算
 3. ( 表达式 ) -> 括号运算
 6. ID -> 别名
 7. NUMBER -> 数字字面量

我们把所有的情况都写出来：
```.g4
expression
  : expression OP expression
  | expression QU expression ':' expression
  | '(' expression ')'
  | ID
  | NUMBER
  ;
```

接着我们定义一些终结符，所谓终结符就是说他们不会再产生别的语法了，而我们之前写的语法规则，都叫产生式。

一般终结符我们用大写字母代替：
```.g4
QU: '?';
OP: '+' | '-' | '*' | '/'; // + - * /
ID : [A-Z_]+; // 变量
NUMBER : [1-9][0-9]*|[0]|([0-9]+[.][0-9]+) ; // 数字 

LINE_COMMENT : '//' .*? '\n' -> skip ; 
COMMENT : '/*' .*? '*/' -> skip ;

WS : [ \t\r\n]+ -> skip ; // skip spaces, tabs, newlines
```

这里还加量不加价的定义了一些`comment`,`withe-space`之类的。让他们都标记为`->skip`，antlr会帮我们把他们都忽略掉，不会出现在ast中。

现在我们将语法都写在`src/yatjs.g4`里，然后运行`antlr4ts ./src/yatjs.g4 -visitor -o ./src/lr`，`src/lr`中就有antlr帮我们生成好的语法解析器了。

## 运行

我们可以这样运行：
```ts
// src/index.ts
import { readFileSync } from 'fs';
import { join } from 'path';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { yatjsLexer as Lexer } from './lr/src/yatjsLexer';
import { yatjsParser as Parser } from './lr/src/yatjsParser';
import Visitor from './visitor';

// Create the lexer and parser

// 读取一个简单的代码文件
const text = readFileSync(join(__dirname, '../test/index.yjs'), 'utf-8');
const inputStream = new ANTLRInputStream(text);
// 用生成的词法分析器分析
const lexer = new Lexer(inputStream);
const tokenStream = new CommonTokenStream(lexer);
// 用生成的语法分析器分析
const parser = new Parser(tokenStream);

// 拿到入口树
const tree = parser.program();

const visitor = new Visitor();

// 开始用visitor模式运行
tree.accept(visitor);
```
visitor 现在我们还没有实现，先空着，接下来我们就要实现它。

