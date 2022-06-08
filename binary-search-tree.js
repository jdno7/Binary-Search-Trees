class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root){
      this.root = new Node (val)
      return this
    }
    let current = this.root
    while (current) {
      if (val < current.val) {
        if (current.left) {
          current=current.left
        } 
        else {
          current.left = new Node (val);
          return this
        }
      }
      if (val > current.val) {
        if (current.right) {
          current=current.right
        } 
        else {
          current.right = new Node (val);
          return this
        }
      }
    }
      
      
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

   insertRecursively(val, node=this.root) {
    if (!this.root) {
      this.root = new Node (val)
      return this
    }
      if (val < node.val) {
        // console.log('traversing left', node)
        if (node.left) return this.insertRecursively(val, node.left)
        else {
          // console.log('adding node.left to', node)
          node.left = new Node(val)
          return this
        }
      }
      if (val > node.val) {
        // console.log('traversing right', node)
        if (node.right) return this.insertRecursively(val,node.right)
        else {
          node.right = new Node(val)
          return this
        }
      }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root
    if (val === current.val) return current
    while(current) {
      if (val === current.val) return current
      if (val < current.val){
        if (current.left) current = node.left
        else return undefined
      }
        
      if (val > current.val){
        if (current.right) current = current.right
        else return undefined
      }
        
    }
   
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node=this.root) {
      if (!this.root) {
      return undefined
      }
      if (val === node.val) return node
      if (val < node.val){
        if (node.left) return this.findRecursively(val, node.left)
        else return undefined
      }
        
      if (val > node.val){
        if (node.right) return this.findRecursively(val, node.right)
        else return undefined
        }
        
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let current = this.root
    const nodes = []
    function traverse (node){
      console.log(node.val)
      nodes.push(node.val)
      console.log(nodes)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return nodes
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let current = this.root
    const nodes = []
    function traverse (node){
      if (node.left) traverse(node.left)
      console.log(node.val)
      nodes.push(node.val)
      if (node.right) traverse(node.right)
    }
    traverse(current)
    return nodes
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let current = this.root
    const nodes = []
    function traverse (node){
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      console.log(node.val)
      nodes.push(node.val)
    }
    traverse(current)
    return nodes
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let node = this.root
    let queue = []
    let data = []

    queue.push(node)

    while (queue.length){
      node = queue.shift()
      data.push(node.val)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}

module.exports = BinarySearchTree;
