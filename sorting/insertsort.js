// Midnight coding, Written by Tom Krcha

var array = [];
var steps = 0;

function randArray(){
	for(var i=0;i<20;i++){
		var rnd = (Math.random()*10)|0
		array.push(rnd);

	}
	console.log("Original: "+array.join());
}

function insertionsort(array){
	var len = array.length;
	var valueToInsert;
	var holePos;
	for(var i=0;i<len;i++){
		valueToInsert = array[i];
		holePos = i;
		while(holePos>0 &&  valueToInsert<array[holePos-1]){
			array[holePos] = array[holePos-1];
			holePos = holePos-1;
			console.log(array[holePos]+" -> "+array[holePos-1]);
			//
			steps++;
		}
		array[holePos] = valueToInsert;
	}
}

function insertionsort2(array){
	var n = array.length;
	for(var i = 1;i<n;i++){
		for(var k = i; k>0; k--){
			if(array[k]<array[k-1]){
				swap(array,k,k-1)

			}
		}
	}
}


function swap(array,i,j){
	var a = array[i];
	var b = array[j];
	array[i] = b;
	array[j] = a;
}


// function swap(){
// 	var a = a[k];
// 	var b = a[k-1];
// 	a[k-1] = a;
// 	a[k] = b;
// }

function run(){
	randArray();
	insertionsort(array);
	console.log("insertsort ("+steps+"/"+array.length+"): "+array.join());
}

run();