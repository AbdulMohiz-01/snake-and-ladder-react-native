export const snakeAndLadders = {
  8: "11",
  13: "1",
  15: "26",
  21: "31",
  27: "16",
  33: "18",
};
export const initialCordinates = { left: 40, bottom: 52 };
export const playerSize = 40;
export const rows = 7;
export const columns = 5;

export const boxCordinates = [];

for (let i = 0, bottomVal = 52; i < rows; i++, bottomVal += 70) {
  const boxRow = [];
  const direction = i % 2 === 0 ? 1 : -1;
/**
 * Calculates the left value based on the direction and initial coordinates.
 * @param {number} direction - The direction of the calculation (1 for left-to-right, -1 for right-to-left).
 * @param {Object} initialCoordinates - The initial coordinates object containing the left and top values.
 * @param {number} initialCoordinates.left - The initial left value.
 * @param {number} initialCoordinates.top - The initial top value.
 * @param {number} columns - The number of columns in the grid.
 * @returns {number} - The calculated left value.
 */
  let leftVal =
    direction === 1
      ? initialCordinates.left
      : initialCordinates.left + 70 * (columns - 1);

  for (let j = 0; j < columns; j++) {
    const box = {
      left: leftVal,
      bottom: bottomVal,
    };
    boxRow.push(box);
    leftVal += direction * 70;
  }

  boxCordinates.push(boxRow);
}
