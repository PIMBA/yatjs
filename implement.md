# 实现 Visitor

## 定义类型
我们的 Visitor 定义在 `src/visitor.ts` 中，但在定义 visitor 之前，我们需要先知道我们的表达式计算结果会出现哪些类型：
  1. number
正如设计的时候所说，我们的类型系统非常简单，现阶段只支持number类型。所以我们可以定义：
```ts
type RightResult = number;

type ProgramResult = RightResult | void;
```
为什么`ProgramResult`需要一个`void`？因为我们的程序有些情况下并不返回值，例如statement就不返回值。

## 声明 Visitor
```ts
class Visitor
  extends AbstractParseTreeVisitor<ProgramResult>
  implements IVisitor<ProgramResult> 
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
interface IScope {
  define(key: string, value: RightResult): boolean;
  get(key: string): RightResult?
}
```
它有两个方法，一个是 `define`, 它向作用域里塞一个新的符号，如果这个符号已经定义过了，那就返回`false`。
第二个方法是`get`,它向作用域请求一个值，如果不存在，返回`undefined`。

作用域就简单的实现这个接口就好啦。

#### 存储到作用域
我们在代码中追加：
```ts
...
private scope: IScope = new Scope();
...
visitDeclaration(ctx: DeclarationContext) {
  ...
  this.scope.define
}
```
