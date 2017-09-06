class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    } else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  // Retrieval
  get(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.get(key);
    } else if (key > this.key && this.right) {
      return this.right.get(key);
    } else {
      throw new Error("Key Error");
    }
  }
  // Removal
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        seccessor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

const height = new BinarySearchTree();

height.insert("-10");
height.insert("-1");
height.insert("1");
height.insert("5");
height.insert("10");
height.insert("5");
// height.insert("10");
height.insert("100");
// height.insert("1000");
// height.insert("4000");
// height.insert("1000000");
// height.insert("10000000");

console.log("height is: ", height);

function heightFinder(node) {
  // code here
  if (node === null) {
    return 0;
  }
  const left = heightFinder(node.left);
  const right = heightFinder(node.right);
  console.log("------------node left: ", node.left);
  console.log("------------node right: ", node.right);

  if (left > right) {
    // code
    console.log("left is: ", left);
    // console.log("node is: ", node);
    return left + 1;
  } else {
    // code
    console.log("right is: ", right);
    return right + 1;
  }
}


console.log("Height is: ", heightFinder(height));