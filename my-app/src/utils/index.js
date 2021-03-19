/* I create an array of color strings to use for the color palette */

export const COLORS = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'white',
    'black'
];

/* buildCellList creates and returns an array of empty cell objects */

export function buildCellList() {
    const cellList = [];

    for (let i = 0; i < 64; i++) {
        cellList.push({
            color: null
        });
    }

    return cellList;
}