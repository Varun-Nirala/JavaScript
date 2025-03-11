var canvas = document.getElementById('myCanvas');
canvas.addEventListener("keydown", doKeyDown, false);

$('#myCanvas').focus()

var context = myCanvas.getContext("2d");
context.fillRect(100, 100, 50, 30);

var canvasWidth = myCanvas.width;
var canvasHeight = myCanvas.height;

var x = 100;
var y = 100;

function doKeyDown(e) {
  switch (e.keyCode) {
    case 87:
    case 38:
      y = y - 10;
      clearCanvas();
      context.fillRect(x, y, 50, 30);
      console.log('W pressed');
      break;
    case 83:
    case 40:
      y = y + 10;
      clearCanvas();
      context.fillRect(x, y, 50, 30);
      console.log('S pressed');
      break;
    case 65:
    case 37:
      x = x - 10;
      clearCanvas();
      context.fillRect(x, y, 50, 30);
      console.log('A pressed');
      break;
    case 68:
    case 39:
      x = x + 10;
      clearCanvas();
      context.fillRect(x, y, 50, 30);
      console.log('D pressed');
      break;
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvasWidth, canvasHeight);
}
