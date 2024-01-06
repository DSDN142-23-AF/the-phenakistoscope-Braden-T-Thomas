const SLICE_COUNT = 20;

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_FRAME); //STATIC_FRAME
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CW);
  pScope.set_slice_count(SLICE_COUNT);
}

function setup_layers(pScope){

  new PLayer(null, 6, 16, 56);  //lets us draw the whole circle background, ignoring the boundaries

  var layer1 = new PLayer(eyes);
  layer1.mode(RING);
  layer1.set_boundary(800, 900);

  //var layer2 = new PLayer(stars);
  //layer2.mode( RING );
  //layer2.set_boundary( 200, 1000 );

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

  top_eyelid = top_eyelid - 50 * (-3.75 * ((animation.frame) * (animation.frame -1)));
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

// Does not currently work
function stars(x, y, animation, pScope){
  beginShape();
  stroke(255, 255, 255)
  fill(255, 255, 255)
  strokeWeight(6)
  curveVertex(0, 200);
  curveVertex(0, 200);
  curveVertex(5, 205);
  curveVertex(10, 210);
  curveVertex(10, 210);
  endShape();
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
