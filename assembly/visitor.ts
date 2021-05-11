/**
 * Top level visitor that will expect an implemented _visit function to visit
 * a single node and then provides a generic function for collections of nodes
 * and will visit each member of the collection.
 */
export abstract class AbstractVisitor<T> {
    visit<T2>(node: T2 | null): void {
        if (node == null) {
            return;
        } else if (node instanceof Array) {
            for (let i = 0; i < node.length; i++) {
                this.visit(node[i]);
            }
        } else if (node instanceof Map) {
            const values: T[] = node.values();
            for (let i = 0; i < values.length; i++) {
                this._visit(values[i]);
            }
        } else {
            // @ts-ignore
            this._visit(node);
        }
    }

    protected abstract _visit(node: T): void;
}

export abstract class AbstractTransformVisitor<T> {
    visit<T2>(node: T2 | null): T2 | null {
        if (node == null) {
            return null;
        } else if (node instanceof Array) {
            // @ts-ignore
            let arr: indexof<T2>[] = new Array();
            for (let i = 0; i < node.length; i++) {
                // @ts-ignore
                arr.push(changetype<indexof<T2>>(this.visit(node[i])));
            }
            return changetype<T2>(arr);
        } else if (node instanceof Map) {
            let map = new Map();
            // @ts-ignore
            type Key = indexof<T2>;
            // @ts-ignore
            type Value = valueof<T2>;
            let nodeMap = <Map<Key, Value>>node;
            let keys = nodeMap.keys();
            // @ts-ignore
            for (let i = 0; i < keys.length; i++) {
                // @ts-ignore
                map.set(keys[i], this.visit(nodeMap.get(keys[i])));
            }
            return changetype<T2>(map);
        } else {
            /// @ts-ignore Node is not iterable.
            return this._visit(node) as T2;
        }
    }

    protected abstract _visit(node: T): T;
}
