	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	canvas.width = 510;
	canvas.height = 450;
	
	var w = 510;
	var h = 450;
	var cw = 10;
	var d;
	var food;
	var score;
	var dead = 1;
	var press = 0;
	var snake_array; 
	var button = {
		x: 210,
		y: 207,
		width: 90,
	    height: 35,    
	    fill: "red",
	    stroke: "black"
	};
	window.addEventListener("mousedown", doMouseDown, false);
	function doMouseDown(event) {
	  x = event.pageX - canvas.offsetLeft;
	  y = event.pageY - canvas.offsetTop;
	  if (x>=210 && x<=300 && y>=207 && y<=242 && dead == 1) {
	     init();
	  }
	}
	function start(){
		fill(0,0,w,h,'#A9A9A9');
		fill(button.x,button.y,button.width,button.height,"red");
		ctx.fillStyle = "white";
		ctx.font="25px Courier New";
		ctx.fillText("PLAY", 225, 230);
	}
	start();
	function init()
	{
			score = 0;
			dead = 0;
			d = "right"; 
			create_snake();
			create_food(); 
			if(typeof game_loop != "undefined") clearInterval(game_loop);
			game_loop = setInterval(paint, 60);
	}

	
	function create_snake()
	{
		var length = 5;
		snake_array = []; 
		for(var i = length-1; i>=0; i--)
		{
			snake_array.push({x: i, y:0});
		}
	}
	
	function create_food()
	{
		food = {
			x: Math.round(Math.random()*(w-cw)/cw), 
			y: Math.round(Math.random()*(h-cw)/cw), 
		};
	}
	
	function paint()
	{
		fill(0,0,w,h,'#A9A9A9');	
		//head cell
		var nx = snake_array[0].x;
		var ny = snake_array[0].y;

		move();
		if(d == "right") nx++;
		else if(d == "left") nx--;
		else if(d == "up") ny--;
		else if(d == "down") ny++;


		if(nx == -1 || nx == w/cw || ny == -1 || ny == h/cw )
		{
			clearInterval(game_loop);
			start();
			dead = 1;
			return;
		}
		if(nx == food.x && ny == food.y)
		{
			var tail = {x: nx, y: ny};
			score++;
			create_food();
		}
		else 
		{
			var tail = snake_array.pop(); //pops out the last cell
			tail.x = nx; tail.y = ny;
		}
		snake_array.unshift(tail); //put tail as the first cell
		
		for(var i = 0; i < snake_array.length; i++)
		{
			var c = snake_array[i];
			paint_cell(c.x, c.y,"red");
		}
		
		paint_cell(food.x, food.y,"yellow");
		var score_text = "SCORE: " + score;
		ctx.fillStyle = "blue";
		ctx.font="15px bold Courier New";
		ctx.fillText(score_text, 8, 18);
	}
	function fill(x, y, wd, ht,color){
		ctx.fillStyle = color;
		ctx.fillRect(x, y, wd, ht);
		ctx.strokeStyle = "black";
		ctx.strokeRect(x, y, wd, ht);
	}
	function paint_cell(x, y,color)
	{
		ctx.fillStyle = color;
		ctx.fillRect(x*cw, y*cw, cw, cw);
		ctx.strokeStyle = "black";
		ctx.strokeRect(x*cw, y*cw, cw, cw);
	}
	
/*	function check_collision(x, y, array)
	{
		for(var i = 0; i < array.length; i++)
		{
			if(array[i].x == x && array[i].y == y)
			 return true;
		}
		return false;
	} */
	var keysDown = {};
	window.addEventListener('keydown', function(e) {
	    keysDown[e.keyCode] = true;
	});
	window.addEventListener('keyup', function(e) {
	    delete keysDown[e.keyCode];
	});
	function move(){
		if (37 in keysDown) {
	       d = "left";
	    }
	    if (38 in keysDown) {
	       d = "up";
	    }
	    if (39 in keysDown) {
	       d = "right";
	    }
	    if (40 in keysDown) {
	       d = "down";
	    }
	}

