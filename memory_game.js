var array = ['10','10','11','11','12','12','13','13','14','14','22','22','26','26','3','3','31','31','7','7','2','2','42','42'];
var values = [];
var id = [];
var flipped = 0;

// setInterval(function () {
//     var d = new Date();
//     var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet 00:00 to seconds for easier caculation
//     var fiveMin = 60 * 5; //five minutes is 300 seconds!
//     var timeleft = fiveMin - seconds % fiveMin; // let's say 01:30, then current seconds is 90, 90%300 = 90, then 300-90 = 210. That's the time left!
//     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds into 00:00 
//     document.getElementById('timer').innerHTML = result;

// }, 500)

Array.prototype.memory_tile_shuffle = function(){
    var i = 0, j, temp;
    while(i++ < (this.length-1)){
        j = ~~(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function board(){
    flipped = 0;
    var output = '';
    array.memory_tile_shuffle();
    for(var i = 0; i < array.length; i++){
        output += '<div id="tile_'+i+'" onclick="flipTile(this,\''+array[i]+'\')"></div>';
    }
    document.getElementById('memory').innerHTML = output;
}
function flipTile(tile,val){
    if(tile.innerHTML == "" && values.length < 2){
        tile.style.background = '#FFF';
        tile.innerHTML = val;
        if(values.length == 0){
            values.push(val);
            id.push(tile.id);
        } else if(values.length == 1){
            values.push(val);
            id.push(tile.id);
            if(values[0] == values[1]){
                flipped += 2;
                values = [];
                id = [];
                if(flipped == array.length){
                    alert("Congratulations! You win..");
                    document.getElementById('memory').innerHTML = "";
                    board();
                }
            } else {
                function flip2Back(){
                    var tile_1 = document.getElementById(id[0]);
                    var tile_2 = document.getElementById(id[1]);
                    tile_1.style.background = '#FC4040';
                    tile_1.innerHTML = "";
                    tile_2.style.background = '#FC4040';
                    tile_2.innerHTML = "";
                    values = [];
                    id = [];
                }
                setTimeout(flip2Back, 600);
            }
        }
    }
}

