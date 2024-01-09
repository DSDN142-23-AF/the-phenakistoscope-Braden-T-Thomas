const SLICE_COUNT = 20;

function setup_pScope(pScope){
  pScope.output_mode(STATIC_FRAME); //STATIC_FRAME
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 6, 16, 56);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(stars);
  layer1.mode(SWIRL(1));
  layer1.set_boundary( 500, 800 );

  var layer2 = new PLayer(eyes);
  layer2.mode(RING);
  layer2.set_boundary(800, 900);

  var layer3 = new PLayer(tears)
  layer3.mode(RING);
  layer3.set_boundary(300, 800);
}

function eyes(x, y, animation, pScope){
  let eye_y_val = -850;
  let top_eyelid = eye_y_val  
  let bottom_eyelid = eye_y_val  
  let eye_under_top_eyelid = eye_y_val - 50
  let eye_under_bottom_eyelid = eye_y_val + 50

  top_eyelid = top_eyelid -
  
  50 * (-3.75 * ((animation.frame) * (animation.frame -1)));
  bottom_eyelid = bottom_eyelid + 50 * (-3.75 *((animation.frame) * (animation.frame -1)));

  //Eye under layer
  beginShape();
  fill(255, 255, 255);
  strokeWeight(6);
  curveVertex(-125, eye_y_val);
  curveVertex(-125, eye_y_val);
  curveVertex(0, eye_under_top_eyelid);
  curveVertex(125, eye_y_val);
  curveVertex(125, eye_y_val);
  endShape();

  beginShape();
  curveVertex(-125, eye_y_val);
  curveVertex(-125, eye_y_val);
  curveVertex(0, eye_under_bottom_eyelid);
  curveVertex(125, eye_y_val);
  curveVertex(125, eye_y_val);
  endShape();

  // Iris
  fill(0, 0, 0);
  strokeWeight(0);
  ellipseMode(CENTER);
  ellipse(0, -850, 75);


  stroke(26,36,96);
  //Top eyelid
  fill(6,16,56);
  beginShape();
  strokeWeight(0);
  curveVertex(-125, eye_y_val-60);
  curveVertex(-125, eye_y_val-60);
  curveVertex(-125, eye_y_val-2);
  curveVertex(0, top_eyelid);
  curveVertex(125, eye_y_val-2);
  curveVertex(125, eye_y_val-60);
  curveVertex(125, eye_y_val-60);
  endShape();

  beginShape();
  noFill();
  strokeWeight(6);
  curveVertex(-125, eye_y_val);
  curveVertex(-125, eye_y_val);
  curveVertex(0, top_eyelid);
  curveVertex(125, eye_y_val);
  curveVertex(125, eye_y_val);
  endShape();


  //Bottom eyelid
  fill(6,16,56);
  beginShape();
  strokeWeight(0);
  curveVertex(-125, eye_y_val+60);
  curveVertex(-125, eye_y_val+60);
  curveVertex(-125, eye_y_val+2);
  curveVertex(0, bottom_eyelid);
  curveVertex(125, eye_y_val+2);
  curveVertex(125, eye_y_val+60);
  curveVertex(125, eye_y_val+60);
  endShape();

  beginShape();
  noFill();
  strokeWeight(6)
  curveVertex(-125, eye_y_val);
  curveVertex(-125, eye_y_val);
  curveVertex(0, bottom_eyelid);
  curveVertex(125, eye_y_val);
  curveVertex(125, eye_y_val);
  endShape();
}

// Still does not work
function stars(x, y, animation, pScope){
  let size_inner = 10;
  let size_outer = 20;

  size_outer = size_outer * (0 * animation.frame);

  star_gen(0, 500, size_inner, size_outer);
}


function star_gen(x_pos, y_pos, size_inner, size_outer){ 
  fill(255, 255, 255);
  star(x_pos, y_pos, size_inner, size_outer, 4);
}


// Taken from https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints){
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}


function tears(x, y, animation, pScope){

  let tear_y = -780
  tear_y = tear_y * (animation.frame -1) 

  // Tear shape
  beginShape();
  curveVertex(0, -tear_y -44); // Beginning
  curveVertex(0, -tear_y -44); // Beginning
  curveVertex(-12, -tear_y -12); // curve point 1
  curveVertex(0, -tear_y); //Mid Point
  curveVertex(12, -tear_y -12); // curve point 2
  curveVertex(0, -tear_y -44); // End
  curveVertex(0, -tear_y -44); // End
  endShape();

  // Lake
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(66, 135, 245)
  arc(x,y,600,600,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background
}
