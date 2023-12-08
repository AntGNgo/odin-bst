class Node {
	constructor(data) {
		this.data = data;
		this.left = null;
		this.right = null;
	}

	setLeft(node) {
		this.left = node;
	}

	setRight(node) {
		this.right = node;
	}
}

class Tree {
	constructor(array) {
		this.array = array;
	}

	buildTree(array, start, end) {
		if (array.length <= 1) {
			return null;
		}
		let start = 0;
		let end = array.length - 1;
		let middle = Math.floor((start + end) / 2);
		const leftArr = array.slice(start, middle);
		const rightArr = array.slice(middle + 1);
		const root = new Node(array[middle]);

		root.setLeft(this.buildTree(leftArr));
		root.setRight(this.buildTree(rightArr));
		console.log(root);

		return root;
	}

	startBuild() {
		return this.buildTree([...this.array]);
	}

	// Visualize tree
}
const prettyPrint = (node, prefix = '', isLeft = true) => {
	if (node === null) {
		return;
	}
	if (node.right !== null) {
		prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
	}
	console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
	if (node.left !== null) {
		prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
	}
};

const tree = new Tree([1, 2, 3, 4, 5]);
// const tree = new Tree([1, 2]);
const builtTree = tree.startBuild();
console.log(builtTree);
