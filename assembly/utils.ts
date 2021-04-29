import { Node } from "./as/ast";
import { ASTBuilder } from "./astBuilder";

export function toString(node: Node): string {
    return ASTBuilder.build(node);
}

export function i64_to_string(value: i64, unsigned: bool = false): string {
    return unsigned ? u64(value).toString() : value.toString();
}
