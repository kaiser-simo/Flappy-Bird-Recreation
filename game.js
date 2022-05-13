let birdX = 50
let birdY = 300
let poletopX = []
let poletopY = 400
let polebotY = -600
let speed = 0
const grav = 0.3
for(let i = 0; i < 5; i++){
	poletopX[i] = 900 + i*Math.random()*600
}
function update(){
	speed += grav
	if(birdY > 700){
		alert("deiba")
	}
	for(let i = 0; i < 5; i++){
		if(areColliding(birdX, birdY, 50, 50, poletopX[i], poletopY, 75, 500)){
			alert("deiba")
		}
		if(areColliding(birdX, birdY, 50, 50, poletopX[i], polebotY, 75, 800)){
			alert("deiba")
		}
		poletopX[i] -= 3
		if(poletopX[i] < - 75){
			poletopX[i] = 900 + i*Math.random()*600
		}
	}
	birdY += speed
}

function draw(){
	drawImage(bird, birdX, birdY, 50, 50)
	for(let i = 0; i < 5; i++){
		drawImage(barrelRed, poletopX[i], poletopY, 75, 500)
		drawImage(barrelRed, poletopX[i], polebotY, 75, 800)
	}
}

function keyup(key){
	if(key == 32){
		speed -= 6
		birdY += speed
	}
}