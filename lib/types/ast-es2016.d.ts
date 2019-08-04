import * as es2015 from "./ast-es2015"
import * as Def from "./ast-definer"

export * from "./ast-common"

//------------------------------------------------------------------------------
// Definition
//------------------------------------------------------------------------------

export namespace ASTEnhancements {
    export interface ExponentialOperator {
        nodes: {
            AssignmentExpression: {
                operator: "**="
            }
            BinaryExpression: {
                operator: "**"
            }
        }
    }

    export interface BindingRestEnhancement {
        nodes: {
            BindingRestElement: {
                argument:
                    | Def.NodeRef<"BindingArrayPattern">
                    | Def.NodeRef<"BindingObjectPattern">
            }
        }
    }
}

export interface ASTDefinition extends Def.Extends<es2015.ASTDefinition, [
    ASTEnhancements.BindingRestEnhancement,
    ASTEnhancements.ExponentialOperator,
]> {}

//------------------------------------------------------------------------------
// Unions
//------------------------------------------------------------------------------

export type Node<T extends string = "Node"> = Def.ExtractNode<T, ASTDefinition>

//------------------------------------------------------------------------------
// Root
//------------------------------------------------------------------------------

export interface ModuleProgram extends Def.Node<"ModuleProgram", ASTDefinition> {}
export interface ScriptProgram extends Def.Node<"Program", ASTDefinition> {}

//------------------------------------------------------------------------------
// Modules
//------------------------------------------------------------------------------

export interface ExportAllDeclaration extends Def.Node<"ExportAllDeclaration", ASTDefinition> {}
export interface ExportDefaultDeclaration extends Def.Node<"ExportDefaultDeclaration", ASTDefinition> {}
export interface ExportNamedFromDeclaration extends Def.Node<"ExportNamedFromDeclaration", ASTDefinition> {}
export interface ExportNamedDeclaration extends Def.Node<"ExportNamedDeclaration", ASTDefinition> {}
export interface ImportDeclaration extends Def.Node<"ImportDeclaration", ASTDefinition> {}

//------------------------------------------------------------------------------
// Statements
//------------------------------------------------------------------------------

export interface BlockStatement extends Def.Node<"BlockStatement", ASTDefinition> {}
export interface BreakStatement extends Def.Node<"BreakStatement", ASTDefinition> {}
export interface ClassDeclaration extends Def.Node<"ClassDeclaration", ASTDefinition> {}
export interface ContinueStatement extends Def.Node<"ContinueStatement", ASTDefinition> {}
export interface DebuggerStatement extends Def.Node<"DebuggerStatement", ASTDefinition> {}
export interface DoWhileStatement extends Def.Node<"DoWhileStatement", ASTDefinition> {}
export interface EmptyStatement extends Def.Node<"EmptyStatement", ASTDefinition> {}
export interface ExpressionStatement extends Def.Node<"ExpressionStatement", ASTDefinition> {}
export interface ForInStatement extends Def.Node<"ForInStatement", ASTDefinition> {}
export interface ForOfStatement extends Def.Node<"ForOfStatement", ASTDefinition> {}
export interface ForStatement extends Def.Node<"ForStatement", ASTDefinition> {}
export interface FunctionDeclaration extends Def.Node<"FunctionDeclaration", ASTDefinition> {}
export interface IfStatement extends Def.Node<"IfStatement", ASTDefinition> {}
export interface LabeledStatement extends Def.Node<"LabeledStatement", ASTDefinition> {}
export interface ReturnStatement extends Def.Node<"ReturnStatement", ASTDefinition> {}
export interface SwitchStatement extends Def.Node<"SwitchStatement", ASTDefinition> {}
export interface ThrowStatement extends Def.Node<"ThrowStatement", ASTDefinition> {}
export interface TryStatement extends Def.Node<"TryStatement", ASTDefinition> {}
export interface VariableDeclaration extends Def.Node<"VariableDeclaration", ASTDefinition> {}
export interface WhileStatement extends Def.Node<"WhileStatement", ASTDefinition> {}
export interface WithStatement extends Def.Node<"WithStatement", ASTDefinition> {}

//------------------------------------------------------------------------------
// Expressions
//------------------------------------------------------------------------------

export interface ArrayExpression extends Def.Node<"ArrayExpression", ASTDefinition> {}
export interface ArrowFunctionExpression extends Def.Node<"ArrowFunctionExpression", ASTDefinition> {}
export interface AssignmentExpression extends Def.Node<"AssignmentExpression", ASTDefinition> {}
export interface BasicMemberExpression extends Def.Node<"BasicMemberExpression", ASTDefinition> {}
export interface BinaryExpression extends Def.Node<"BinaryExpression", ASTDefinition> {}
export interface BooleanLiteral extends Def.Node<"BooleanLiteral", ASTDefinition> {}
export interface CallExpression extends Def.Node<"CallExpression", ASTDefinition> {}
export interface ClassExpression extends Def.Node<"ClassExpression", ASTDefinition> {}
export interface ComputedMemberExpression extends Def.Node<"ComputedMemberExpression", ASTDefinition> {}
export interface ConditionalExpression extends Def.Node<"ConditionalExpression", ASTDefinition> {}
export interface FunctionExpression extends Def.Node<"FunctionExpression", ASTDefinition> {}
export interface Identifier extends Def.Node<"Identifier", ASTDefinition> {}
export interface LogicalExpression extends Def.Node<"LogicalExpression", ASTDefinition> {}
export interface MetaProperty extends Def.Node<"MetaProperty", ASTDefinition> {}
export interface NewExpression extends Def.Node<"NewExpression", ASTDefinition> {}
export interface NullLiteral extends Def.Node<"NullLiteral", ASTDefinition> {}
export interface NumberLiteral extends Def.Node<"NumberLiteral", ASTDefinition> {}
export interface ObjectExpression extends Def.Node<"ObjectExpression", ASTDefinition> {}
export interface RegExpLiteral extends Def.Node<"RegExpLiteral", ASTDefinition> {}
export interface SequenceExpression extends Def.Node<"SequenceExpression", ASTDefinition> {}
export interface StringLiteral extends Def.Node<"StringLiteral", ASTDefinition> {}
export interface TaggedTemplateExpression extends Def.Node<"TaggedTemplateExpression", ASTDefinition> {}
export interface TemplateLiteral extends Def.Node<"TemplateLiteral", ASTDefinition> {}
export interface ThisExpression extends Def.Node<"ThisExpression", ASTDefinition> {}
export interface UnaryExpression extends Def.Node<"UnaryExpression", ASTDefinition> {}
export interface UpdateExpression extends Def.Node<"UpdateExpression", ASTDefinition> {}
export interface YieldExpression extends Def.Node<"YieldExpression", ASTDefinition> {}

//------------------------------------------------------------------------------
// Others
//------------------------------------------------------------------------------

export interface AccessorProperty extends Def.Node<"AccessorProperty", ASTDefinition> {}
export interface AnonymousDefaultExportedClassDeclaration extends Def.Node<"AnonymousDefaultExportedClassDeclaration", ASTDefinition> {}
export interface AnonymousDefaultExportedFunctionDeclaration extends Def.Node<"AnonymousDefaultExportedFunctionDeclaration", ASTDefinition> {}
export interface AssignmentArrayPattern extends Def.Node<"AssignmentArrayPattern", ASTDefinition> {}
export interface AssignmentAssignmentPattern extends Def.Node<"AssignmentAssignmentPattern", ASTDefinition> {}
export interface AssignmentComputedProperty extends Def.Node<"AssignmentComputedProperty", ASTDefinition> {}
export interface AssignmentObjectPattern extends Def.Node<"AssignmentObjectPattern", ASTDefinition> {}
export interface AssignmentProperty extends Def.Node<"AssignmentProperty", ASTDefinition> {}
export interface AssignmentRestElement extends Def.Node<"AssignmentRestElement", ASTDefinition> {}
export interface AssignmentShorthandProperty extends Def.Node<"AssignmentShorthandProperty", ASTDefinition> {}
export interface BasicProperty extends Def.Node<"BasicProperty", ASTDefinition> {}
export interface BindingArrayPattern extends Def.Node<"BindingArrayPattern", ASTDefinition> {}
export interface BindingAssignmentPattern extends Def.Node<"BindingAssignmentPattern", ASTDefinition> {}
export interface BindingComputedProperty extends Def.Node<"BindingComputedProperty", ASTDefinition> {}
export interface BindingObjectPattern extends Def.Node<"BindingObjectPattern", ASTDefinition> {}
export interface BindingProperty extends Def.Node<"BindingProperty", ASTDefinition> {}
export interface BindingRestElement extends Def.Node<"BindingRestElement", ASTDefinition> {}
export interface BindingShorthandProperty extends Def.Node<"BindingShorthandProperty", ASTDefinition> {}
export interface CatchClause extends Def.Node<"CatchClause", ASTDefinition> {}
export interface ClassBody extends Def.Node<"ClassBody", ASTDefinition> {}
export interface ComputedAccessorProperty extends Def.Node<"ComputedAccessorProperty", ASTDefinition> {}
export interface ComputedMethodDefinition extends Def.Node<"ComputedMethodDefinition", ASTDefinition> {}
export interface ComputedMethodProperty extends Def.Node<"ComputedMethodProperty", ASTDefinition> {}
export interface ComputedProperty extends Def.Node<"ComputedProperty", ASTDefinition> {}
export interface ConstructorDefinition extends Def.Node<"ConstructorDefinition", ASTDefinition> {}
export interface ExportSpecifier extends Def.Node<"ExportSpecifier", ASTDefinition> {}
export interface ImportDefaultSpecifier extends Def.Node<"ImportDefaultSpecifier", ASTDefinition> {}
export interface ImportNamespaceSpecifier extends Def.Node<"ImportNamespaceSpecifier", ASTDefinition> {}
export interface ImportSpecifier extends Def.Node<"ImportSpecifier", ASTDefinition> {}
export interface MethodDefinition extends Def.Node<"MethodDefinition", ASTDefinition> {}
export interface MethodProperty extends Def.Node<"MethodProperty", ASTDefinition> {}
export interface ShorthandProperty extends Def.Node<"ShorthandProperty", ASTDefinition> {}
export interface SpreadElement extends Def.Node<"SpreadElement", ASTDefinition> {}
export interface Super extends Def.Node<"Super", ASTDefinition> {}
export interface SwitchCase extends Def.Node<"SwitchCase", ASTDefinition> {}
export interface TemplateElement extends Def.Node<"TemplateElement", ASTDefinition> {}
export interface VariableDeclarator extends Def.Node<"VariableDeclarator", ASTDefinition> {}
