/* eslint-disable @typescript-eslint/no-empty-function */
import {
    Node,
    Source,
    NamedTypeNode,
    FunctionTypeNode,
    TypeName,
    TypeParameterNode,
    IdentifierExpression,
    AssertionExpression,
    BinaryExpression,
    CallExpression,
    ClassExpression,
    CommaExpression,
    ElementAccessExpression,
    FunctionExpression,
    InstanceOfExpression,
    LiteralExpression,
    NewExpression,
    ParenthesizedExpression,
    PropertyAccessExpression,
    TernaryExpression,
    UnaryPostfixExpression,
    UnaryPrefixExpression,
    BlockStatement,
    BreakStatement,
    ContinueStatement,
    DoStatement,
    EmptyStatement,
    ExportStatement,
    ExportDefaultStatement,
    ExportImportStatement,
    ExpressionStatement,
    ForStatement,
    IfStatement,
    ImportStatement,
    ReturnStatement,
    SwitchStatement,
    ThrowStatement,
    TryStatement,
    VariableStatement,
    WhileStatement,
    ClassDeclaration,
    EnumDeclaration,
    EnumValueDeclaration,
    FieldDeclaration,
    FunctionDeclaration,
    ImportDeclaration,
    InterfaceDeclaration,
    MethodDeclaration,
    NamespaceDeclaration,
    TypeDeclaration,
    VariableDeclaration,
    DecoratorNode,
    IndexSignatureNode,
    ParameterNode,
    ExportMember,
    SwitchCase,
    TypeNode,
    ArrayLiteralExpression,
    ObjectLiteralExpression,
    FloatLiteralExpression,
    IntegerLiteralExpression,
    StringLiteralExpression,
    RegexpLiteralExpression,
    UnaryExpression,
    SuperExpression,
    FalseExpression,
    TrueExpression,
    ThisExpression,
    NullExpression,
    ConstructorExpression,
    Statement,
    VoidStatement,
    CommentNode,
    TemplateLiteralExpression,
} from "./as";
import { BaseTransformVisitor } from "./baseTransform";

import { AbstractVisitor } from "./visitor";

export class BaseVisitor extends AbstractVisitor<Node> {
    protected _visitor: BaseTransformVisitor = instantiate<BaseTransformVisitor>();
    protected _visit(node: Node): void {
        this._visitor.visit(node);
    }

    @inline
    visitStatement(node: Statement): void {
        this._visitor.visitStatement(node);
    }

    @inline
    visitSource(node: Source): void {
        this._visitor.visitSource(node);
    }

    @inline
    visitTypeNode(node: TypeNode): void {
        this._visitor.visitTypeNode(node);
    }

    visitTypeName(node: TypeName): void {
        this._visitor.visitTypeName(node);
    }

    visitNamedTypeNode(node: NamedTypeNode): void {
        this._visitor.visitNamedTypeNode(node);
    }

    visitFunctionTypeNode(node: FunctionTypeNode): void {
        this._visitor.visitFunctionTypeNode(node);
    }

    visitTypeParameter(node: TypeParameterNode): void {
        this._visitor.visitTypeParameter(node);
    }

    visitIdentifierExpression(node: IdentifierExpression): void {
        this._visitor.visitIdentifierExpression(node);
    }

    visitArrayLiteralExpression(node: ArrayLiteralExpression): void {
        this._visitor.visitArrayLiteralExpression(node);
    }

    visitObjectLiteralExpression(node: ObjectLiteralExpression): void {
        this._visitor.visitObjectLiteralExpression(node);
    }

    visitAssertionExpression(node: AssertionExpression): void {
        this._visitor.visitAssertionExpression(node);
    }

    visitBinaryExpression(node: BinaryExpression): void {
        this._visitor.visitBinaryExpression(node);
    }

    visitCallExpression(node: CallExpression): void {
        this._visitor.visitCallExpression(node);
    }

    visitClassExpression(node: ClassExpression): void {
        this._visitor.visitClassExpression(node);
    }

    visitCommaExpression(node: CommaExpression): void {
        this._visitor.visitCommaExpression(node);
    }

    visitElementAccessExpression(node: ElementAccessExpression): void {
        this._visitor.visitElementAccessExpression(node);
    }

    visitFunctionExpression(node: FunctionExpression): void {
        this._visitor.visitFunctionExpression(node);
    }

    visitLiteralExpression(node: LiteralExpression): void {
        this._visitor.visitLiteralExpression(node);
    }

    visitFloatLiteralExpression(node: FloatLiteralExpression): void {
        this._visitor.visitFloatLiteralExpression(node);
    }

    visitInstanceOfExpression(node: InstanceOfExpression): void {
        this._visitor.visitInstanceOfExpression(node);
    }

    visitIntegerLiteralExpression(node: IntegerLiteralExpression): void {
        this._visitor.visitIntegerLiteralExpression(node);
    }

    visitStringLiteral(str: string, singleQuoted: bool = false): void {
        this._visitor.visitStringLiteral(str, singleQuoted);
    }

    visitStringLiteralExpression(node: StringLiteralExpression): void {
        this._visitor.visitStringLiteralExpression(node);
    }

    visitTemplateLiteralExpression(node: TemplateLiteralExpression): void {
        this._visitor.visitTemplateLiteralExpression(node);
    }

    visitRegexpLiteralExpression(node: RegexpLiteralExpression): void {
        this._visitor.visitRegexpLiteralExpression(node);
    }

    visitNewExpression(node: NewExpression): void {
        this._visitor.visitNewExpression(node);
    }

    visitParenthesizedExpression(node: ParenthesizedExpression): void {
        this._visitor.visitParenthesizedExpression(node);
    }

    visitPropertyAccessExpression(node: PropertyAccessExpression): void {
        this._visitor.visitPropertyAccessExpression(node);
    }

    visitTernaryExpression(node: TernaryExpression): void {
        this._visitor.visitTernaryExpression(node);
    }

    visitUnaryExpression(node: UnaryExpression): void {
        this._visitor.visitUnaryExpression(node);
    }

    visitUnaryPostfixExpression(node: UnaryPostfixExpression): void {
        this._visitor.visitUnaryPostfixExpression(node);
    }

    visitUnaryPrefixExpression(node: UnaryPrefixExpression): void {
        this._visitor.visitUnaryPrefixExpression(node);
    }

    visitSuperExpression(node: SuperExpression): void {
        this._visitor.visitSuperExpression(node);
    }

    visitFalseExpression(node: FalseExpression): void {
        this._visitor.visitFalseExpression(node);
    }

    visitTrueExpression(node: TrueExpression): void {
        this._visitor.visitTrueExpression(node);
    }

    visitThisExpression(node: ThisExpression): void {
        this._visitor.visitThisExpression(node);
    }

    visitNullExperssion(node: NullExpression): void {
        this._visitor.visitNullExperssion(node);
    }

    visitConstructorExpression(node: ConstructorExpression): void {
        this._visitor.visitConstructorExpression(node);
    }

    visitNodeAndTerminate(node: Statement): void {
        this._visitor.visitNodeAndTerminate(node);
    }

    visitBlockStatement(node: BlockStatement): void {
        this._visitor.visitBlockStatement(node);
    }

    visitBreakStatement(node: BreakStatement): void {
        this._visitor.visitBreakStatement(node);
    }

    visitContinueStatement(node: ContinueStatement): void {
        this._visitor.visitContinueStatement(node);
    }

    visitClassDeclaration(
        node: ClassDeclaration,
        isDefault: bool = false
    ): void {
        this._visitor.visitClassDeclaration(node, isDefault);
    }

    visitDoStatement(node: DoStatement): void {
        this._visitor.visitDoStatement(node);
    }

    visitEmptyStatement(node: EmptyStatement): void {
        this._visitor.visitEmptyStatement(node);
    }

    visitEnumDeclaration(node: EnumDeclaration, isDefault: bool = false): void {
        this._visitor.visitEnumDeclaration(node, isDefault);
    }

    visitEnumValueDeclaration(node: EnumValueDeclaration): void {
        this._visitor.visitEnumValueDeclaration(node);
    }

    visitExportImportStatement(node: ExportImportStatement): void {
        this._visitor.visitExportImportStatement(node);
    }

    visitExportMember(node: ExportMember): void {
        this._visitor.visitExportMember(node);
    }

    visitExportStatement(node: ExportStatement): void {
        this._visitor.visitExportStatement(node);
    }

    visitExportDefaultStatement(node: ExportDefaultStatement): void {
        this._visitor.visitExportDefaultStatement(node);
    }

    visitExpressionStatement(node: ExpressionStatement): void {
        this._visitor.visitExpressionStatement(node);
    }

    visitFieldDeclaration(node: FieldDeclaration): void {
        this._visitor.visitFieldDeclaration(node);
    }

    visitForStatement(node: ForStatement): void {
        this._visitor.visitForStatement(node);
    }

    visitFunctionDeclaration(
        node: FunctionDeclaration,
        isDefault: bool = false
    ): void {
        this._visitor.visitFunctionDeclaration(node, isDefault);
    }

    visitIfStatement(node: IfStatement): void {
        this._visitor.visitIfStatement(node);
    }

    visitImportDeclaration(node: ImportDeclaration): void {
        this._visitor.visitImportDeclaration(node);
    }

    visitImportStatement(node: ImportStatement): void {
        this._visitor.visitImportStatement(node);
    }

    visitIndexSignature(node: IndexSignatureNode): void {
        this._visitor.visitIndexSignature(node);
    }

    visitInterfaceDeclaration(
        node: InterfaceDeclaration,
        isDefault: bool = false
    ): void {
        this._visitor.visitInterfaceDeclaration(node, isDefault);
    }

    visitMethodDeclaration(node: MethodDeclaration): void {
        this._visitor.visitMethodDeclaration(node);
    }

    visitNamespaceDeclaration(
        node: NamespaceDeclaration,
        isDefault: bool = false
    ): void {
        this._visitor.visitNamespaceDeclaration(node, isDefault);
    }

    visitReturnStatement(node: ReturnStatement): void {
        this._visitor.visitReturnStatement(node);
    }

    visitSwitchCase(node: SwitchCase): void {
        this._visitor.visitSwitchCase(node);
    }

    visitSwitchStatement(node: SwitchStatement): void {
        this._visitor.visitSwitchStatement(node);
    }

    visitThrowStatement(node: ThrowStatement): void {
        this._visitor.visitThrowStatement(node);
    }

    visitTryStatement(node: TryStatement): void {
        this._visitor.visitTryStatement(node);
    }

    visitTypeDeclaration(node: TypeDeclaration): void {
        this._visitor.visitTypeDeclaration(node);
    }

    visitVariableDeclaration(node: VariableDeclaration): void {
        this._visitor.visitVariableDeclaration(node);
    }

    visitVariableStatement(node: VariableStatement): void {
        this._visitor.visitVariableStatement(node);
    }

    visitWhileStatement(node: WhileStatement): void {
        this._visitor.visitWhileStatement(node);
    }

    visitVoidStatement(node: VoidStatement): void {
        this._visitor.visitVoidStatement(node);
    }

    visitComment(node: CommentNode): void {
        this._visitor.visitComment(node);
    }

    visitDecoratorNode(node: DecoratorNode): void {
        this._visitor.visitDecoratorNode(node);
    }

    visitParameter(node: ParameterNode): void {
        this._visitor.visitParameter(node);
    }
}
