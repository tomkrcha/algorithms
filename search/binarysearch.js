// Binary Search
// Midnight coding, Written by Tom Krcha

var array = [];

function createArray(){
	for(var i=482;i<9482;i++){
		array.push(i);
	}
	//console.log("Original: "+array.join());
}

var KEY_NOT_FOUND = [];

function binarySearch(array,key,min,max){
	var len = array.length;
	
	if(max<min){
		return KEY_NOT_FOUND;
	}else{
		var mid = midpoint(min,max);
		console.log("mid: "+mid);
		if(array[mid]>key){
			return binarySearch(array, key, min, mid-1);
		}else if(array[mid]<key){
			return binarySearch(array, key, mid+1,max);
		}else{
			//
			console.log("FOUND");
			return mid;
		}
	}
}

function midpoint(min,max){
	return (max-min)/2|0+min;
}

function swap(array,i,j){
	var tmp = array[i];
	array[i] = array[j];
	array[j] = a;
}

function run(){
	createArray();
	var toSearch = array[0]+(Math.random()*array.length)|0;
	var foundOnPosition = binarySearch(array,toSearch,array[0],array.length);
	console.log("searching: "+toSearch);
	console.log("foundOnPosition: "+foundOnPosition);
}

run();