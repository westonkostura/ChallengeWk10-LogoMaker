const { Circle, Triangle, Square } = require("./shapes");

function renderSVG(response) {
  const shapes = {
    Circle: Circle,
    Triangle: Triangle,
    Square: Square,
  };

  const pickedShape = shapes[response.logoShape];
  if (pickedShape) {
    const userShape = new shapes(
      response.logoShapeColor,
      response.logoText,
      response.logoColor
    );
    return userShape.render();
  }
}

module.exports = renderSVG;
