// basic implementation of flood-fill algorithm
// by Tom Krcha, during a Sunday evening
// not optimized, just first solution out of the head

var map = [[1,1,1,1,1],[2,1,2,2,3],[2,2,3,3,3],[1,1,1,3,4],[4,4,4,4,3]];

var colors = ["","#ff0000","#00ff00","#0000FF","#FFFF00"];

var gridSize = 20;
var maxX = 5;
var maxY = 5;
var cnvs;

function render(){

	console.log("render");
	for(var y=0;y<maxY;y++){
		for(var x=0;x<maxX;x++){
			var field = map[y][x];
			cnvs.fillStyle=colors[field];
			cnvs.fillRect(x*gridSize,y*gridSize,gridSize,gridSize);
		}
	}
}

function onClickToFill(event){
	var posX = event.x/gridSize|0
	var posY = event.y/gridSize|0

	if(posX>maxX){
		posX = maxX;
	}

	if(posY>maxY){
		posY = maxY;
	}


	floodFillAt(posX,posY)
}

//var filled = [];

function floodFillAt(posX,posY){
	console.log("floodFillAt: "+posX+" "+posY);

	var filled = [];
	var currentField = map[posY][posX];

	// fill itself
	fillPos(posX,posY);
	// test cross to ensure they are connected
	testNow(-1,0);
	testNow(0,-1);
	testNow(0,1);
	testNow(1,0);

	function testNow(x,y){

			var searchPosX = posX+x;
			var searchPosY = posY+y;
			if(searchPosX<0 || searchPosX>=maxX){
				return;
			}
			if(searchPosY<0 || searchPosY>=maxY){
				return;
			}
			
			console.log(searchPosX+" "+searchPosY);


			var field = map[searchPosY][searchPosX];
			if(field==currentField && field!=0){
				
				if(searchPosX==posX && searchPosY==posY){
					fillPos(searchPosX,searchPosY);
				}else{
					filled.push([searchPosX,searchPosY]);
				}
			}	
	}

	console.log("filled: "+filled.length)
	for(var i=0;i<filled.length;i++){
		floodFillAt(filled[i][0],filled[i][1]);
	}
}

function fillPos(posX,posY){
	map[posY][posX] = 0;
	cnvs.fillStyle="#000000";
	cnvs.fillRect(posX*gridSize,posY*gridSize,gridSize,gridSize);
}