// Binary Search Tree
// Midnight coding, Written by Tom Krcha

var root;

var node;
var num;
// NODE - key, name, left, right
function createBST(){
	
	for(var i=0;i<10;i++){
		num = (Math.random()*100|0);
		node = addNode(num,"_"+num);
	}
}

function addNode(key, name){
	var newNode = {};
	newNode.key = key;
	newNode.name = name;
	
	if(root==null){
		root = newNode;
	}else{
		var focusNode = root;
		var parent;

		while(true){
			parent = focusNode;

			if(key < focusNode.key){
				focusNode = focusNode.leftChild;
				if(focusNode==null){
					parent.leftChild = newNode;
					return;
				}
			}else{
				focusNode = focusNode.rightChild;
				if(focusNode == null){
					parent.rightChild = newNode;
					return;
				}
			}
		}
	}
	
}

function inOrderTraverseTree(focusNode){
	if(focusNode != null){
		inOrderTraverseTree(focusNode.leftChild);

		console.log(focusNode.name);

		inOrderTraverseTree(focusNode.rightChild)
	}
}

function preOrderTraverseTree(focusNode){
	if(focusNode != null){
		console.log(focusNode.name);

		preOrderTraverseTree(focusNode.leftChild);

		preOrderTraverseTree(focusNode.rightChild)
	}
}

function postOrderTraverseTree(focusNode){
	if(focusNode != null){

		postOrderTraverseTree(focusNode.leftChild);

		postOrderTraverseTree(focusNode.rightChild)

		console.log(focusNode.name);
	}
}

function findNode(key){
	var focusNode = root;
	while(focusNode.key != key){
		if(key < focusNode.key){
			focusNode = focusNode.leftChild;
		}else{
			focusNode = focusNode.rightChild;
		}

		if(focusNode == null){
			return null;
		}
	}
	return focusNode;
}


function run(){
	createBST();
	inOrderTraverseTree(root);
	console.log("_______");
	preOrderTraverseTree(root);
	console.log("_______");
	postOrderTraverseTree(root);
	console.log("_______");
	console.log("Search for "+num+": "+findNode(num).name);
	

}

run();