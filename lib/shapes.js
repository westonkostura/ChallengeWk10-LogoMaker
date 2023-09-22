//Shape class has all similar features from all shapes
class Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    this.logoShapeColor = logoShapeColor;
    this.logoText = logoText;
    this.logoColor = logoColor;
  }

  getShapeColor() {
    return this.logoShapeColor;
  }

  getLogoColor() {
    return this.logoColor;
  }

  getLogoText() {
    return this.logoText;
  }
}

//triangle class for svg shape 
class Triangle extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getLogoColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Triangle
    const svgCode = ` <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;

    return svgCode;
  }
}

//square class for svg shape
class Square extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getLogoColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Square
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><rect width="200" height="200" fill="${shapeColor}" />
        <text x="100" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;

    return svgCode;
  }
}

//circle class for shape
class Circle extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getLogoColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Circle
    const svgCode = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><circle cx="100" cy="100" r="100" fill="${shapeColor}" />
    <text x="100" y="100" font-size="60" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text></svg>`;

    return svgCode;
  }
}

module.exports = { Triangle, Circle, Square }