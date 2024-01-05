class Shape {
  constructor(fillColor, textColor, text) {
    this.fillColor = fillColor;
    this.textColor = textColor;
    this.text = text;
  }

  renderText() {
    return `
    <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${this.textColor}">${this.text}</text>
  `;
  }
}

class Circle extends Shape {
  constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
  }

  render() {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill="${this.fillColor}" />
        ${this.renderText()}
      </svg>
    `;
  }
}

class Triangle extends Shape {
  constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
  }

  render() {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0L300 100L0 100Z" fill="${this.fillColor}" />
        ${this.renderText()}
      </svg>
    `;
  }
}

class Square extends Shape {
  constructor(fillColor, textColor, text) {
    super(fillColor, textColor, text);
  }

  render() {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="0" width="200" height="200" fill="${this.fillColor}" />
        ${this.renderText()}
      </svg>
    `;
  }
}

export { Shape, Circle, Triangle, Square };
