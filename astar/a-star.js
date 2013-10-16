//// VERY basic A* algorithm, just an evening playing
// by Tom Krcha, during a Sunday evening
// not optimized, just first solution out of the head

var map = [[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,4,1,1,1,1,1],[1,1,1,1,4,1,1,1,1,1],[1,1,1,1,4,1,3,1,1,1],[1,1,1,1,4,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1]];
var values = [[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]];

var colors = ["","#CCCCCC","#00ff00","#0000FF","#FF00FF"];

var gridSize = 20;
var maxX = 10;
var maxY = 10;
var cnvs;

var fromX;
var fromY;
var toX;
var toY;

var closedList;
var lowest;
var lowestX;
var lowestY;


function doOnClick(event){
	var posX = event.x/gridSize|0
	var posY = event.y/gridSize|0
	console.log(posX+", "+posY);

	if(posX>=maxX){
		posX = maxX-1;
	}

	if(posY>=maxY){
		posY = maxY-1;
	}

	// Starting point
	cnvs.fillStyle=colors[2];
	cnvs.fillRect(posX*gridSize,posY*gridSize,gridSize,gridSize);
	map[posY][posX] = 2;

	astar(posX,posY);
}

function render(){
	console.log("render");
	for(var y=0;y<maxY;y++){
		for(var x=0;x<maxX;x++){
			var field = map[y][x];
			cnvs.fillStyle=colors[field];
			cnvs.fillRect(x*gridSize,y*gridSize,gridSize,gridSize);
			cnvs.fillStyle="#FFFFFF";

			// path begin/end
			if(field==2){
				fromX = x;
				fromY = y;
				values[fromY][fromX] = 1000;
			}else if(field==3){
				toX = x;
				toY = y;
			}else if(field==4){
				values[y][x] = 1000;
			}
		}
	}


}

function astar(posX,posY){
	closedList = [];
	surroundings(posX,posY,values[posY][posX]);
	renderClosedList();
}

function surroundings(posX,posY){
		
	console.log("check surroundings: "+posX+", "+posY);
	if(posX==toX && posY == toY){
		console.log("Reached");
		return;
	}
	if(map[posY][posX]>3){
		console.log("WALL at "+posX+", "+posY);
		return;
	}

	lowest = 0;
	lowestX = 0;
	lowestY = 0;
	var F = 0;

	for(var y=-1;y<=1;y++){
		for(var x=-1;x<=1;x++){

			var targetX = posX+x;
			var targetY = posY+y;

			if(x==0 && y==0){
					continue;
			}

			

			if(targetX<0 || targetX>=maxX){
				continue;
			}
			if(targetY<0 || targetY>=maxY){
				continue;
			}
			// WALL!
			if(map[targetY][targetX]>3){
				F=1000;
				// write value
				cnvs.font="8px Tahoma";
				cnvs.fillText(F,targetX*gridSize+3,targetY*gridSize+13);
				continue;
			}

			if(values[targetY][targetX]!=-1){
				F = values[targetY][targetX];
			}
			

			if(F==0){
				var isDiagonal;
				var G = 0;
				if(x==0 || y==0){
					// connected field
					isDiagonal = false;
					G = 10;
				}else{
					// diagonal field
					isDiagonal = true;
					//continue;
					G = 14;
				}

				// Heuristic
				var H = 10*(Math.abs(targetX-toX) + Math.abs(targetY-toY));
				var F = G+H;

				// write F value on screen
				cnvs.font="8px Tahoma";
				cnvs.fillText(F,targetX*gridSize+3,targetY*gridSize+13);

				// 
				values[targetY][targetX] = F;
			}
			if(lowest==0 || F<lowest){
				// don't go to places we went to before
				setLowest(targetX,targetY,F);
			}else if(lowest==F){
				console.log("there is more than one lowest");
				if(Math.random()>0.5){
					// There can be more done here
					setLowest(targetX,targetY,F);
				}
			}
			F = 0;
		}

	}
	closedList.push(posX+","+posY);
	

	if(lowest==0){

	}else{
		console.log("lowest: "+lowest+" at "+lowestX+", "+lowestY);
		surroundings(lowestX,lowestY);
	}


}

function setLowest(targetX,targetY,F){
	if(closedList.indexOf(targetX+","+targetY)==-1){
		lowest = F;
		lowestX = targetX;
		lowestY = targetY;
	}
}

function renderClosedList(){
	var len = closedList.length;
	for(var i=0;i<len;i++){
		var item = closedList[i].split(",");
		var x = item[0];
		var y = item[1];
		cnvs.strokeStyle = "#FF0000";
		cnvs.strokeRect(x*gridSize,y*gridSize,gridSize,gridSize);
	}
}

function reconstructPath(){
	for(var y=-1;y<=1;y++){
		for(var x=-1;x<=1;x++){

		}
	}
}