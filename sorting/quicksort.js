// Midnight coding, Written by Tom Krcha

var array = [];

function randArray(){
	for(var i=0;i<20;i++){
		var rnd = (Math.random()*10)|0
		array.push(rnd);

	}
	console.log("Original: "+array.join());
}

function quicksort(array, left, right){

 	if(right - left <= 0){
 		return;
 	}else{

 		var pivot = array[right];
 		var pivotLocation = partition(array,left,right,pivot);

 		quicksort(array, left,pivotLocation-1);
 		quicksort(array, pivotLocation+1,right);
 	}

}

function partition(array, left, right, pivot){
	var leftPointer = left-1;
	var rightPointer = right;




	while(true){

		while(array[++leftPointer] < pivot){
//			console.log("leftPointer: "+array[leftPointer] +" < "+pivot)
		}
		
		while(rightPointer > 0 && array[--rightPointer] > pivot){
		}

		if(leftPointer >= rightPointer){
			break;
		}else{
			swap(array, leftPointer, rightPointer);

		}
	}

	swap(array, leftPointer, right);

	return leftPointer;
}

function swap(array,i,j){
	var tmp = array[i];
	array[i] = array[j];
	array[j] = tmp;
}

function run(){
	randArray();
	quicksort(array,0,array.length-1);
	console.log("quicksort: "+array.join());
}

run();