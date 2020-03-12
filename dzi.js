window.onload = main;

const matrix = [];
const M = 8;
let currentI = 0;
let currentJ = 0;

function main() {
    createMatrix();
    initializeMatrix();
    putHorse();

    while (isFinished()) {
        initializeMatrix();
        moveHorse();
    }
    console.log(matrix);
}

function createMatrix() {
    for (let i = 0; i < M; i++) {
        matrix[i] = [];
        for (let j = 0; j < M; j++) {
            matrix[i][j] = 0;
        }
    }
}

function initializeMatrix() {
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < M; j++) {
            if (matrix[i][j] !== -1) {
                matrix[i][j] = getAvailableBoxes(i, j).length;
            }
        }
    }
}

function putHorse() {
    matrix[currentI][currentJ] = -1;
}

function getAvailableBoxes(i, j) {
    const availableBoxes = [];

    if (canMoveTo(i + 2, j + 1)) {
        availableBoxes.push({i: i + 2, j: j + 1});
    }
    if (canMoveTo(i + 2, j - 1)) {
        availableBoxes.push({i: i + 2, j: j - 1});
    }
    if (canMoveTo(i + 1, j + 2)) {
        availableBoxes.push({i: i + 1, j: j + 2});
    }
    if (canMoveTo(i + 1, j - 2)) {
        availableBoxes.push({i: i + 1, j: j - 2});
    }
    if (canMoveTo(i - 2, j + 1)) {
        availableBoxes.push({i: i - 2, j: j + 1});
    }
    if (canMoveTo(i - 2, j - 1)) {
        availableBoxes.push({i: i - 2, j: j - 1});
    }
    if (canMoveTo(i - 1, j + 2)) {
        availableBoxes.push({i: i - 1, j: j + 2});
    }
    if (canMoveTo(i - 1, j - 2)) {
        availableBoxes.push({i: i - 1, j: j - 2});
    }

    return availableBoxes;
}

function canMoveTo(i, j) {
    return i >= 0 && i < M && j >= 0 && j < M && matrix[i][j] !== -1;
}

function moveHorse() {
    let maxValue = M;
    getAvailableBoxes(currentI, currentJ).forEach((val) => {
        if (matrix[val.i][val.j] < maxValue) {
            maxValue = matrix[val.i][val.j];
            currentI = val.i;
            currentJ = val.j;
        }
    })
    return putHorse();
}

function isFinished() {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (matrix[i][j] !== -1) {
                return true;
            }
        }
    }
}