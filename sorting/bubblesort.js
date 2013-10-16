// Midnight coding, Written by Tom Krcha

var array = [];

function randArray(){
	for(var i=0;i<20;i++){
		var rnd = (Math.random()*10)|0
		array.push(rnd);

	}
	console.log("Original: "+array.join());
}

function bubblesort(array){
	var len = array.length;
	var swapped;
	do{
		swapped = false;
		for(var i=1;i<len;i++){
			var a = array[i-1];
			var b = array[i];
			if(a>b){
				array[i] = a;
				array[i-1] = b;
				swapped = true;
			}
		}
	}while(swapped);


}

function run(){
	randArray();
	bubblesort(array);
	console.log("bubblesort: "+array.join());
}

run();