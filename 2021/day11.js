const input = [
    '4738615556',
    '6744423741',
    '2812868827',
    '8844365624',
    '4546674266',
    '4518674278',
    '7457237431',
    '4524873247',
    '3153341314',
    '3721414667',
]

let inputMatrix = input.map(row => row.split('').map(v => +v))
let flash = 0;
const resetMatrix = (matrix) => matrix.map(line => line.map(v => v === -1 ? 0 : v))
const addOne = (matrix) => matrix.map(row => row.map(v => ++v))

const vectors = [
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

const explode = (matrix, i, j) => {
    matrix[i][j] = -1

    for (const [di, dj] of vectors) {
        if (
            matrix[i + di] === undefined ||
            matrix[i + di][j + dj] === undefined ||
            matrix[i + di][j + dj] <= 0
        ) {
            continue;
        }

        ++matrix[i + di][j + dj]
    }
}

const evaluate = (matrix, justExploded = false) => {
    let roundExplosion = false;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] > 9) {
                stepFlash++
                explode(matrix, i, j)
                roundExplosion = true;
            }
        }
    }
    if (roundExplosion) {
        evaluate(matrix, true)
    }
    return resetMatrix(matrix)
}

let stepFlash;
let i = 0;
while (true) {
    i++
    stepFlash = 0;
    inputMatrix = addOne(inputMatrix)
    inputMatrix = evaluate(inputMatrix)
    if (inputMatrix.length * inputMatrix[0].length === stepFlash) {
        console.log(i)
        break
    }
}
