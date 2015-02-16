var ctracker;
//var slider;

function setup() {

  var videoInput = createCapture();
  videoInput.size(640, 480);
  videoInput.position(0, 0);
  
  var cnv = createCanvas(640, 480);
  cnv.position(0, 0);

  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  //slider = createSlider(0, 50, 10);
  //slider.position(0, 400);

  noStroke();
}

function draw() {
  clear();
  
  var positions = ctracker.getCurrentPosition();
  
  for (var i=0; i<positions.length; i++) {
    fill(map(positions[i][0], width*0.33, width*0.66, 0, 255), map(positions[i][1], height*0.33, height*0.66, 0, 255), 255);
    //var val = slider.value();
    ellipse(positions[i][0], positions[i][1], 5, 5);
    textFont("Georgia");
    text(i,positions[i][0],positions[i][1]);
  }

}