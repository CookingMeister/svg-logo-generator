const Circle = require("./shapes.js").Circle;
const Square = require("./shapes.js").Square;

// describe("Circle", () => {
//   it("renders a circle", () => {
//     const circle = new Circle();
//     circle.setColor="undefined";
//     expect(circle.render()).toEqual(`
//     <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="undefined" /><text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="undefined">undefined</text></svg>`);
//   });
// });

// describe("Square", () => {
//   it("renders a square", () => {
//     const square = new Square();
//     square.setColor("blue");
//     expect(square.render()).toEqual(`
//     <svg width="300" height="200" viewBox="0 0 300 200" fill="blue" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="0" width="200" height="200" fill="blue" />`);
// });
// });

describe("Circle", () => {
  it("renders a circle", () => {
    const circle = new Circle();
    circle.setColor("blue");
    expect(circle.render()).toEqual(`<circle cx="150" cy="100" r="100" fill="blue" />`);
  });
});