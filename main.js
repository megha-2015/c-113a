function preload() {
}

function setup() {
  canvas = createCanvas(640, 480);
  canvas.position(110, 250);
  /*position() is a predefined function of p5.js, which helps to move the canvas on the page.
- position() function takes two parameters, first value is like margin-left, and second value is like margin-top.
- It is not compulsory to give the same values inside position(),give as per your wish.*/
  video = createCapture(VIDEO);
  video.hide();

  color = "";
}

function draw() {
  image(video, 0, 0, 640, 480);
  tint(color);
}

function take_snapshot(){    
  save('student_name.png');
}

function filter_tint()
{
	color = document.getElementById("color_name").value;
}

