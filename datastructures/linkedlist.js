// Binary Search Tree
// Midnight coding, Written by Tom Krcha

var array = [];

var lastItem = null;
// NODE - key, name, left
function createList(){
	var i=0;
	var firstItem = {name:i+"_"+(Math.random()*1000|0),right:null};
	lastItem = firstItem;
	for(i=1;i<100;i++){

		var item = {name:i+"_"+(Math.random()*1000|0),right:null};
		lastItem.right = item;
		lastItem = item;
	}
	return firstItem;
}

function run(){
	var item = createList();
	var n = 0;
	while(item!=null){
		console.log(n+": "+item.name);
		item = item.right;
		n++
	}
}


run();