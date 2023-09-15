function saveSVG(logoText, logoColor, logoShape, logoShapeColor) {
  var logoText = logoText;
  var logoColor = logoColor;
  var logoShape = logoShape;
  var logoShapeColor = logoShapeColor;

  class Triangle {
    constructor() {
      this.points = "150, 18 244, 182 56, 182";
    }
    setColor(logoColor) {
      this.color = logoColor;
    }
    render() {
      return `<polygon points="${this.points}" fill="${this.color}" />`;
    }
  }

  // Circle class
  class Circle {
    constructor() {
      this.radius = 50;
    }
    setColor(logoColor) {
      this.color = logoColor;
    }
    render() {
      return `<circle cx="150" cy="150" r="${this.radius}" fill="${this.color}" />`;
    }
  }

  // Square class
  class Square {
    constructor() {
      this.size = 100;
    }
    setColor(logoColor) {
      this.color = logoColor;
    }
    render() {
      return `<rect x="100" y="100" width="${this.size}" height="${this.size}" fill="${this.color}" />`;
    }
  }

  
}

module.exports = saveSVG;