// Midnight coding, Written by Tom Krcha

var array = [];

function randArray(){
	for(var i=0;i<20;i++){
		var rnd = (Math.random()*10)|0
		array.push(rnd);

	}
	console.log("Original: "+array.join());
}

function selectionsort(array){
	var len = array.length;
	var k;
	for(var i = 0;i<len;i++){
		k = i;
		for(var j = i+1;j<len;j++){
			if(array[j]<array[k]){
				k = j;
			}
		}
		swap(array,i,k);
	}
}

function swap(array,i,j){
	var a = array[i];
	var b = array[j];
	array[i] = b;
	array[j] = a;
}

function run(){
	randArray();
	selectionsort(array);
	console.log("selectionsort: "+array.join());
}

run();