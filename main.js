
var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;
var player_y = 10;

var block_image_width = 30;
var block_image_height = 30;

var player_object = "";
var block_image_object = "";

function player_update(){
    fabric.Image.fromURL("Screenshot 2021-09-06 074042");
}

function my_keydown(e){
    var key_pressed = e.keyCode;
    console.log(key_pressed);

    if (e.shiftKey==true && key_pressed == 81){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if (e.shiftKey==true && key_pressed == 77){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }

    if(key_pressed==70){
       new_image('ironman_face.png');
       console.log('f');
    }

    
    if(key_pressed==40){
        down();
        console.log("down");
    }

    
    if(key_pressed==39){
        right();
        console.log("right");
    }

    
    if(key_pressed==70){
        up();
        console.log("up");
    }

    
    if(key_pressed==70){
        up();
        console.log("up");
    }

    
    if(key_pressed==66){
        new_image('spiderman_body.png');
        console.log('b');    
    }

    if(key_pressed==76){
        new_image('hulk_legs.png');
        console.log(';');    
    }

    if(key_pressed==82){
        new_image('thor_right_hand.png');
        console.log('r');    
    }
    
    if(key_pressed==72){
        new_image('captain_america_left_hand.png');
        console.log('h');    
    }