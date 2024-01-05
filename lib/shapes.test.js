import {Circle} from 'shapes.js';

describe('Circle', () => {
    it('renders a circle', () => {
    const circle = new Circle();
    expect(circle.render()).toEqual(`
      <circle cx="150" cy="150" r="100"/>
    `);
  });
});