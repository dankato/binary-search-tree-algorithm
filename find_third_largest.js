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
      throw new Error('Key Error');
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
      throw new Error('Key Error');
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

const testTree = new BinarySearchTree();

testTree.insert('40');
testTree.insert('-5');
testTree.insert('25');
testTree.insert('100');
testTree.insert('125');
// testTree.insert('150');
// console.log('The tree: ', testTree)

function thirdLargest(node) {
 while (node.right !== null) {
   node = node.right;
 }

 if (node.left !== null) {
   return node.parent.key;
 }

 if (node.parent !== null) {
   if (node.parent.left !== null) {
     return node.parent.left.key;
   } else if (node.parent.parent !== null) {
     return node.parent.parent.key;
   } else {
     console.log("length less than 3 ");
     return undefined;
   }
 } else {
   console.log("length less than 3");
   return undefined;
 }
}

const thirdLargestIs = new BinarySearchTree();

thirdLargestIs.insert(-10, "");
thirdLargestIs.insert(0, "");
thirdLargestIs.insert(20, "");
thirdLargestIs.insert(25, "");

console.log("what is the 3rd largest? ", thirdLargest(thirdLargestIs));




// function largest(tree, state) {
//   state.n--;
//     if(state.n === 0){
//     console.log('Key: ', tree.key)
//     state.results = tree.key;
//     return;
//   }
//   if (tree.right) {
//     // console.log('Tree right: ', tree.right);
//     largest(tree.right, state);
//     if(state.results) return;
//   }

   
//   if (tree.left) {
//     largest(tree.left, state);
//   } 

// }

// function findThirdLargestNode(node) {

//   if (node.key === null) {
//     return null;
//   }

//   var state = {n : 3, results:null};
//   largest(node, state);
//   //   console.log('N: ', state.n)
//   // if(!--state.n){
//   //   console.log('N in if: ', state.n)
//   //   console.log('what is node.key: ', node.key);
//   //   state.results = node.key;
//   //   console.log('results: ', state.results);
//   //   return;
//   // }
//   // if (node.right) {
//   //   console.log('state results; ', state.results)
//   //   findThirdLargestNode(node.right, state);
//   //   if(state.results) return;
//   // } else if (node.left) {
//   //   return findThirdLargestNode(node.left, state);
//   // } 

//   return state.results;
// }



// console.log(findThirdLargestNode(testTree));
