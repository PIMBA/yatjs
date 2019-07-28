# 实现 Visitor

## 定义类型
我们的 Visitor 定义在 `src/visitor.ts` 中，但在定义 visitor 之前，我们需要先知道我们的表达式计算结果会出现哪些类型：
  1. number
正如设计的时候所说，我们的类型系统非常简单，现阶段只支持number类型。所以我们可以定义：
```ts
type RightValue = number;

type ProgramResult = RightValue;
```

## 实现 Visitor

### 声明
```ts
class Visitor
  extends AbstractParseTreeVisitor<RightValue>
  implements IVisitor<RightValue> 
```
继承`AbstractParseTreeVisitor`能够让我们有能力调用一些默认行为。

现在，我们就可以真正实现这个 Visitor 啦：

### 处理定义

我们第一个需要处理的语句是变量定义，它的产生式是这样的：
```.g4
declaration
  : 'const' ID '=' expression
  ;
```
简单来说，我们将左边表达式的值，给左边的**符号**。
```ts
// 我们实现 visitDeclaration 就可以了
visitDeclaration(ctx: DeclarationContext) {
    // 取得 ID 这个终结符的字面值
    const id = ctx.ID().text;
    // 思考一下如果左边是一个a.x这样的表达式？

    // 计算右边的表达式的值
    const value = this.visit(ctx.expression());
  }
```
好了，现在我们已经拿到了左边的符号和右边的值，我们需要把这对东西存起来以供查询。
我们存储这样符号和值的位置就是**作用域**。我一般把它叫做`scope`。

#### 定义作用域

我们现在的作用域的作用就是存储已经生成的变量，所以它非常简单。
```ts
interface IScope<RightValue> {
  define(key: string, value: RightValue): boolean;
  get(key: string): RightValue;
}
```
它有两个方法，一个是 `define`, 它向作用域里塞一个新的符号，如果这个符号已经定义过了，那就返回`false`。
第二个方法是`get`,它向作用域请求一个值。

作用域就简单的实现这个接口就好啦。

#### 存储到作用域
我们在代码中追加：
```ts
...
private scope: IScope = new Scope();
...
visitDeclaration(ctx: DeclarationContext) {
  ...
  this.scope.define(id, value);
}
```

这样，我们右边表达式的值就已经定义好了。

### 处理表达式

我们接下来要处理的语句是表达式：
```.g4
expression
  : expression OP expression
  | expression QU expression ':' expression
  | '(' expression ')'
  | ID
  | NUMBER
  ;
```
这里需要将所有的情况分类讨论，但因为实现非常简单，所以不贴代码了：

1. 有 OP 的情况下，这是一个计算：
  先得到第一个表达式的值，然后得到第二个表达式。最后把两个表达式的值按 OP 结合起来，返回。
2. 有 QU 的情况下，这是一个三目表达式：
  先得到都一个表达式的值，如果不为 0，计算并返回第一个表达式的值，否则计算并返回第二个的值。
3. 有括号的情况下，返回括号内的表达式的值。
4. 如果表达式是一个 ID，从 scope 里取出一个 ID 的值并且返回。
5. 如果表达式是一个 NUMBER 字面量，返回这个字面量的真实值。


## 输出

至此我们的语言已经基本上实现了！但这个语言没有任何用处，因为它不能和外界有沟通。
有一个简单的办法可以将计算的结果输出到外界，那就是让visitor默认返回最后一个语句的返回值。

为此我们需要定义`visitProgram`, `visitvisitStatement`, 并且将每一个statement的返回存在一个变量里，这样当外界在访问我们的
`program`的时候，就能拿到最后一个表达式的返回值啦。

我们还可以为每一个类型定义一个`toString()`, 这样在控制台上打印的时候调用一下这个方法能够简化输出。