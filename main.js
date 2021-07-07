var canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car_width=75;
car_height=100;
car_x=5;
car_y=255;

car_image="car2.png";
background_image = "parkingLot.jpg"

function add(){
    background_img_Tag=new Image();
    background_img_Tag.onload=uploadBackground;
    background_img_Tag.src=background_image;

    car_img_Tag=new Image();
    car_img_Tag.onload=uploadcar;
    car_img_Tag.src=car_image;
}

function uploadBackground(){
    ctx.drawImage(background_img_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadcar(){
    ctx.drawImage(car_img_Tag, car_x, car_y, car_width, car_height);
}

window.addEventListener("keydown", my_keydown);
 function my_keydown(e){
     keyPressed=e.keyCode;
     console.log(keyPressed);

     if (keyPressed=='40'){
         down();
         console.log("down");
     }
     if (keyPressed=='38'){
        up();
        console.log("up");
    }
    if (keyPressed=='37'){
        left();
        console.log("left");
    }
    if (keyPressed=='39'){
        right();
        console.log("right");
    }
 }

 function up() {
     if(car_y >=0){
         car_y = car_y - 10;
         console.log("When up arrow is pressed, x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadcar();
        }
}

function down() {
    if(car_y <=300){
        car_y = car_y + 10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " +car_y);
        uploadBackground();
        uploadcar();
       }
}

function left() {
    if(car_x >=0){
        car_x = car_x - 10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
       }
}

function right() {
    if(car_x <=725){
        car_x = car_x + 10;
        console.log("When down arrow is pressed, x = " + car_x + " | y = " + car_y);
        uploadBackground();
        uploadcar();
       }
}
