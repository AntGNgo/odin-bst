const removeDuplicates = (array) => {
	const values = [];
	for (let i = 0; i < array.length; i++) {
		if (array[i] === array[i + 1]) {
			values.push(array[i]);
		}
	}
	if (values.length !== 0) {
		values.forEach((value) => {
			const index = array.indexOf(value);
			array.splice(index, 1);
		});
	}
	return array;
};

let myArray = [1, 1, 2, 3, 3, 7, 6, 2, 14, 5, 5];

const sortedArray = myArray.sort();
console.log(removeDuplicates(sortedArray));

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
		if (start > end) return null;
		const mid = Math.floor((start + end) / 2);
		const root = new Node(array[mid]);

		root.setLeft(this.buildTree(array, start, mid - 1));
		root.setRight(this.buildTree(array, mid + 1, end));

		return root;
	}

	startBuild() {
		return this.buildTree([...this.array], 0, this.array.length - 1);
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

const tree = new Tree([2, 1, 3, 4, 5]);
// const tree = new Tree([1, 2]);
const builtTree = tree.startBuild();
// prettyPrint(builtTree);
