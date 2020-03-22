window.onload = main;

const M = 8;
const N = 10;
const matrix = [];
let endPointI;
let endPointJ;

function main() {
    createMatrix();
    startPoint();
    endPoint();
    setWalls();

    startAlgorithm();

    console.log(matrix);
}

function createMatrix() {
    for (let i = 0; i < M; i++) {
        matrix[i] = [];
        for (let j = 0; j < N; j++) {
            matrix[i][j] = 0;
        }
    }
}

function startPoint() {
    const i = Math.floor(Math.random() * M);
    const j = Math.floor(Math.random() * N);

    // startPointI = i;
    // startPointJ = j;
    matrix[i][j] = 1;
}

function endPoint() {
    let i = Math.floor(Math.random() * M);
    let j = Math.floor(Math.random() * N);

    while (matrix[i][j] !== 0) {
        i = Math.floor(Math.random() * M);
        j = Math.floor(Math.random() * N);
    }
    endPointI = i;
    endPointJ = j;
    matrix[i][j] = M * N;
}

function setWalls() {

    let wallsCount = (M * N) * 0.15;

    while (wallsCount) {
        const i = Math.floor(Math.random() * M);
        const j = Math.floor(Math.random() * N);

        if (matrix[i][j] === 0) {
            matrix[i][j] = -1;
            wallsCount--;
        }
    }
}

function startAlgorithm() {
    let currentNumber = 1;

    while (!isFinished()) {
        const boxes = allBoxesEqualTo(currentNumber); // [{i: i, j: j}];

        boxes.forEach((box) => {
            const {i, j} = box;

            initializeNeighbors(i, j, currentNumber + 1);
        });
        currentNumber++;
    }

    showShortWay(currentNumber);
}

function allBoxesEqualTo(num) {
    const boxesEqual = [];

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (matrix[i][j] === num) {
                boxesEqual.push({i: i, j: j});
            }
        }
    }

    return boxesEqual;
}

function initializeNeighbors(currentI, currentJ, neighbor) {
    if (isPossible(currentI + 1, currentJ)) {
        matrix[currentI + 1][currentJ] = neighbor;
    }
    if (isPossible(currentI - 1, currentJ)) {
        matrix[currentI - 1][currentJ] = neighbor;
    }
    if (isPossible(currentI, currentJ + 1)) {
        matrix[currentI][currentJ + 1] = neighbor;
    }
    if (isPossible(currentI, currentJ - 1)) {
        matrix[currentI][currentJ - 1] = neighbor;
    }

}

function isPossible(i, j) {
    return i < M && j >= 0 && i >= 0 && j <= N && matrix[i][j] === 0;
}

function isFinished() {
    if (isPossible(endPointI + 1, endPointJ)) {
        return false;
    }
    if (isPossible(endPointI - 1, endPointJ)) {
        return false;
    }
    if (isPossible(endPointI, endPointJ + 1)) {
        return false;
    }
    return !isPossible(endPointI, endPointJ - 1);

}

function showShortWay(num) {
    while (num > 1) {
        if (markTheShortWay(endPointI, endPointJ, num)) {
            num--;
        }
    }
}

function markTheShortWay(i, j, currentNum) {
    if (isOnBoard(i + 1, j, currentNum)) {
        matrix[i + 1][j] = '#';
        endPointI = i + 1;
        endPointJ = j;
        return true;
    }
    if (isOnBoard(i - 1, j, currentNum)) {
        matrix[i - 1][j] = '#';
        endPointI = i - 1;
        endPointJ = j;
        return true;
    }
    if (isOnBoard(i, j + 1, currentNum)) {
        matrix[i][j + 1] = '#';
        endPointI = i;
        endPointJ = j + 1;
        return true;
    }
    if (isOnBoard(i, j - 1, currentNum)) {
        matrix[i][j - 1] = '#';
        endPointI = i;
        endPointJ = j - 1;
        return true;
    }
}

function isOnBoard(i, j, num) {
    return i < M && j >= 0 && i >= 0 && j <= N && matrix[i][j] === num;
}









