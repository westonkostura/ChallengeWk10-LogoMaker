const { Circle, Triangle, Square } = require("./shapes");

function renderSVG(response) {
  console.log("render")
  const shapes = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
  };
  console.log("this is shapes" + shapes)
  const pickedShape = shapes[response.logoShape];
  console.log("this is pickedshapes" + pickedShape)
  console.log(shapes[response.logoShape])

  if (pickedShape) {
    const userShape = new pickedShape(
      response.logoShapeColor,
      response.logoText,
      response.logoColor
    );
    console.log("userShape: " + userShape)
    return userShape.render();
  }
}

module.exports = renderSVG;
