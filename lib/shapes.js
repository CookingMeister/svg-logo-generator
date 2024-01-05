// Generate SVG for a circle
export function generateCircleSVG(radius, fillColor, textColor) {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="${radius}" fill="${fillColor}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${textColor}">SVG</text>
      </svg>
    `;
  }
  
  // Generate SVG for a triangle
  export function generateTriangleSVG(base, height, fillColor, textColor) {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M100 0L300 100L0 100Z" fill="${fillColor}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${textColor}">SVG</text>
      </svg>
    `;
  }
  
  // Generate SVG for a square
  export function generateSquareSVG(sideLength, fillColor, textColor) {
    return `
      <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="0" width="200" height="200" fill="${fillColor}" />
        <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="50" fill="${textColor}">SVG</text>
      </svg>
    `;
  }