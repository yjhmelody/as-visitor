import { Node } from "./as";

import { BaseVisitor } from "./base";

export class PathVisitor extends BaseVisitor {
    currentPath: Node[] = [];

    protected _visit(node: Node): void {
        this.currentPath.push(node);
        super._visit(node);
        this.currentPath.pop();
    }

    get currentNode(): Node {
        return this.currentPath[this.currentPath.length - 1];
    }

    get currentParent(): Node {
        if (this.currentPath.length == 1) return this.currentNode;
        return this.currentPath[this.currentPath.length - 2];
    }

    get currentParentPath(): Node[] {
        return this.currentPath.slice(0, this.currentPath.length - 1);
    }

    get currentGrandParentPath(): Node[] {
        return this.currentPath.length < 3
            ? []
            : this.currentPath.slice(0, this.currentPath.length - 2);
    }
}
