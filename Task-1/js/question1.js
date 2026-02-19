"use strict";

let x,y,size;
let r,g,b;

function setup() {

    createCanvas(500, 500);

    x = 30;
    y = 30;
    size = 50;
    r = random(255);
    g = random(255);
    b = random(255);
}

function draw() {
    background(0);

    noStroke();

    fill(r,g,b);
    ellipse(x,y,size);

    fill(r/2,g/2,b/2);
    ellipse(x+60,y+60,size*2);

    fill(r/4,g/4,b/4);
    ellipse(x+180,y+180,size*3);

}