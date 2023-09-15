class Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    this.logoShapeColor = logoShapeColor;
    this.logoText = logoText;
    this.logoColor = logoColor;
  }

  getShapeColor() {
    return this.logoShapeColor;
  }

  getTextColor() {
    return this.logoColor;
  }

  getLogoText() {
    return this.logoText;
  }
}

class Triangle extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getLogoColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Triangle
    const svgCode = `<polygon points="150, 18 244, 182 56, 182" fill="${shapeColor}" />
        <text x="150" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text>`;

    return svgCode;
  }
}

class Square extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getTextColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Square
    const svgCode = `<rect width="200" height="200" fill="${shapeColor}" />
        <text x="100" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text>`;

    return svgCode;
  }
}

class Circle extends Shape {
  constructor(logoShapeColor, logoText, logoColor) {
    super(logoShapeColor, logoText, logoColor);
  }

  render() {
    const shapeColor = this.getShapeColor();
    const textColor = this.getTextColor();
    const logoText = this.getLogoText();

    // Generate the SVG code for the Circle
    const svgCode = `<circle cx="100" cy="100" r="100" fill="${shapeColor}" />
    <text x="100" y="100" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${logoText}</text>`;

    return svgCode;
  }
}
