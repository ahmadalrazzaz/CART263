"use strict";

let x,y,size;
let r,g,b;

function setup() {
    createCanvas(500, 500);
    background(0);

    x = 30;
    y = 30;
    size = 50;
    r = random(255);
    g = random(255);
    b = random(255);

    drawEllipse(x,y,size,size,r,g,b);
    drawEllipse(x+60,y+60,size*2,size*2,r/2,g/2,b/2);
    drawEllipse(x+180,y+180,size*3,size*3,r/4,g/4,b/4);

}

function draw() {
    
}

function drawEllipse(x,y,w,h,r,g,b) {
    noStroke();
    fill(r,g,b);
    ellipse(x,y,w,h);
}