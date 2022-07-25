

// Helpful link: https://stackoverflow.com/questions/50643302/addeventlistener-on-a-queryselectorall-with-classlist
const getColumn = (colNumber, lines) =>
{
    const col = [];
    for (let i = 0; i < lines.length; ++i)
    {
        const line = lines[i];
        col.push(line[colNumber]);
    }
    return col;
};

const getAllowed = (column, picks) =>
{
    const choosable = [];
    for (let i = 0; i < picks.length; ++i)
    {
        const pick = picks[i];
        if (!column.includes(pick))
        {
            choosable.push(pick);
        }
    }
    return choosable;
};

function getSquare(colNumber, lineNumber, lines)
{
    const detected = [];
    if (!lineNumber)
    {
        return detected;
    }

    let startCol = Math.floor(colNumber / 3) * 3;
    let endCol = startCol + 3;

    let startLine = Math.floor(lineNumber / 3) * 3;
    let endLine = Math.min(startLine + 3, lines.length);

    for (let i = startCol; i < endCol; ++i)
    {
        for (let j = startLine; j < endLine; ++j)
        {
            const item = lines[j][i];
            if (item !== undefined)
            {
                detected.push(item);
            }
        }
    }

    return detected;
}

const generateRandomLine = (lines) =>
{
    const line = [];
    let selectables = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 9; ++i)
    {
        const column = getColumn(i, lines);

        let allowed;

        // Remove column items
        allowed = getAllowed(column, [1, 2, 3, 4, 5, 6, 7, 8, 9]);

        // Remove line items
        allowed = getAllowed(line, allowed);

        // remove square items
        const square = getSquare(i, lines.length, lines);
        allowed = getAllowed(square, allowed);

        const random = allowed.length > 1 ? Math.floor(Math.random() * allowed.length) : 0;

        const chosen = allowed[random];
        if (chosen === undefined)
        {
            return false;
        }
        line.push(chosen);

        selectables.splice(selectables.indexOf(chosen), 1);
    }

    return line;
};

const generateGrid = () =>
{
    let iterations;
    do
    {
        const grid = [];
        iterations = 0;
        do
        {
            ++iterations;
            if (iterations > 500)
            {
                iterations = -1;
                // Invalid
                break;
            }

            const line = generateRandomLine(grid);
            if (!line)
            {
                continue;
            }
            grid.push(line);


        } while (grid.length < 9);

        if (iterations !== -1)
        {
            return grid;
        }

    } while (true);

};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


displayGrid = () => {
    const grid = generateGrid();
    board = []
    for (let i = 0; i < grid.length; ++i) {
        const line = grid[i];
        board.push(line)
        console.log(JSON.stringify(line));
    }
    let counter = 0;
    // Here, 30 represents the # of NUMBERED cells!
    while (counter < (81 - 1)) {
        i = getRandomInt(0, 8);
        j = getRandomInt(0, 8);
        if (board[i][j] != 0) {
            board[i][j] = 0;
            counter += 1;
        }
      }
    return(board);
};


///////////////////////////////////////////////////////////////////////
solveBoard = document.querySelector(".solveBoard");
cell = document.querySelectorAll(".cell");
newBoard = document.querySelector(".newBoard");
color = "rgb(145, 70, 255)";
untouchedColor = "grey";
incorrectColor = "red"
solvedColor = "green";

r1 = document.querySelectorAll(".r1");
r2 = document.querySelectorAll(".r2");
r3 = document.querySelectorAll(".r3");
r4 = document.querySelectorAll(".r4");
r5 = document.querySelectorAll(".r5");
r6 = document.querySelectorAll(".r6");
r7 = document.querySelectorAll(".r7");
r8 = document.querySelectorAll(".r8");
r9 = document.querySelectorAll(".r9");

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printUnsolvedBoard() {
      // r1
    setTimeout(function() {
      for (let i = 0; i < r2.length; i++) {
      r1[i].innerText = board[0][i];
      if (r1[i].innerText === "0") {
        r1[i].style.backgroundColor = color;
      }
      else {
        r1[i].style.backgroundColor = untouchedColor;
      }
      }
    }, 100);

    // r2
    setTimeout(function() {
    for (let i = 0; i < r2.length; i++) {
      r2[i].innerText = board[1][i];
      if (r2[i].innerText === "0") {
        r2[i].style.backgroundColor = color;
      }
      else {
        r2[i].style.backgroundColor = untouchedColor;
      }
    }
    }, 200);

    // r3
    setTimeout(function() {
    for (let i = 0; i < r3.length; i++) {
      r3[i].innerText = board[2][i];
      if (r3[i].innerText === "0") {
        r3[i].style.backgroundColor = color;
      }
      else {
        r3[i].style.backgroundColor = untouchedColor;
      }
    }     
    }, 300);

    // r4
    setTimeout(function() {
    for (let i = 0; i < r4.length; i++) {
      r4[i].innerText = board[3][i];
      if (r4[i].innerText === "0") {
        r4[i].style.backgroundColor = color;
      }
      else {
        r4[i].style.backgroundColor = untouchedColor;
      }
    }
    }, 400);

    // r5
    setTimeout(function() {
    for (let i = 0; i < r5.length; i++) {
      r5[i].innerText = board[4][i];
      if (r5[i].innerText === "0") {
        r5[i].style.backgroundColor = color;
      }
      else {
        r5[i].style.backgroundColor = untouchedColor;
      }
    }
    }, 500);

    // r6
    setTimeout(function() {
    for (let i = 0; i < r6.length; i++) {
      r6[i].innerText = board[5][i];
      if (r6[i].innerText === "0") {
        r6[i].style.backgroundColor = color;
      }
      else {
        r6[i].style.backgroundColor = untouchedColor;
      }
    }   
    }, 600);


    // r7
    setTimeout(function() {
    for (let i = 0; i < r7.length; i++) {
      r7[i].innerText = board[6][i];
      if (r7[i].innerText === "0") {
        r7[i].style.backgroundColor = color;
      }
      else {
        r7[i].style.backgroundColor = untouchedColor;
      }
    }
    }, 700);


    // r8
    setTimeout(function() {
    for (let i = 0; i < r8.length; i++) {
      r8[i].innerText = board[7][i];
      if (r8[i].innerText === "0") {
        r8[i].style.backgroundColor = color;
      }
      else {
        r8[i].style.backgroundColor = untouchedColor;
      }
    }
    }, 800);


    // r9
    setTimeout(function() {
    for (let i = 0; i < r9.length; i++) {
      r9[i].innerText = board[8][i];
      if (r9[i].innerText === "0") {
        r9[i].style.backgroundColor = color;
      }
      else {
        r9[i].style.backgroundColor = untouchedColor;
      }
    }    
    }, 900);       
};

function printSolvedBoard() {
    // r1
    setTimeout(function() {
      for (let i = 0; i < r1.length; i++) {
        // == is super important! I think we might be comparing a string to a number, but we don't care about data types (hence, we do not use ===)
        if (r1[i].style.backgroundColor !== untouchedColor && r1[i].innerText == board[0][i]) {
          r1[i].style.backgroundColor = solvedColor;
        }
        else if (r1[i].style.backgroundColor !== untouchedColor && r1[i].innerText != board[0][i]) {
          r1[i].innerText = board[0][i];
          r1[i].style.backgroundColor = incorrectColor;
        }
        else {
          r1[i].innerText = board[0][i];
        }
      }
    }, 100);

    // r2
    // don't change r1.length to r2.length!
    setTimeout(function() {
      for (let i = 0; i < r2.length; i++) {
        if (r2[i].style.backgroundColor !== untouchedColor && r2[i].innerText == board[1][i]) {
          r2[i].style.backgroundColor = solvedColor;
        }
        else if (r2[i].style.backgroundColor !== untouchedColor && r2[i].innerText != board[1][i]) {
          r2[i].innerText = board[1][i];
          r2[i].style.backgroundColor = incorrectColor;
        }
        else {
          r2[i].innerText = board[1][i];
        }
      }
    }, 200);

    // r3
    setTimeout(function() {
      for (let i = 0; i < r3.length; i++) {
        if (r3[i].style.backgroundColor !== untouchedColor && r3[i].innerText == board[2][i]) {
          r3[i].style.backgroundColor = solvedColor;
        }
        else if (r3[i].style.backgroundColor !== untouchedColor && r3[i].innerText != board[2][i]) {
          r3[i].innerText = board[2][i];
          r3[i].style.backgroundColor = incorrectColor;
        }
        else {
          r3[i].innerText = board[2][i];
        }
      }
    }, 300);

    // r4
    setTimeout(function() {
      for (let i = 0; i < r4.length; i++) {
        if (r4[i].style.backgroundColor !== untouchedColor && r4[i].innerText == board[3][i]) {
          r4[i].style.backgroundColor = solvedColor;
        }
        else if (r4[i].style.backgroundColor !== untouchedColor && r4[i].innerText != board[3][i]) {
          r4[i].innerText = board[3][i];
          r4[i].style.backgroundColor = incorrectColor;
        }
        else {
          r4[i].innerText = board[3][i];
        }
      }
    }, 400);

    // r5
    setTimeout(function() {
      for (let i = 0; i < r5.length; i++) {
        if (r5[i].style.backgroundColor !== untouchedColor && r5[i].innerText == board[4][i]) {
          r5[i].innerText = board[4][i];
          r5[i].style.backgroundColor = solvedColor;
        }
        else if (r5[i].style.backgroundColor !== untouchedColor && r5[i].innerText != board[4][i]) {
            r5[i].innerText = board[4][i];
            r5[i].style.backgroundColor = incorrectColor;
        }
        else {
          r5[i].innerText = board[4][i];
        }
      }
    }, 500);

    // r6
    setTimeout(function() {
      for (let i = 0; i < r6.length; i++) {
        if (r6[i].style.backgroundColor !== untouchedColor && r6[i].innerText == board[5][i]) {
          r6[i].style.backgroundColor = solvedColor;
        }
        else if (r6[i].style.backgroundColor !== untouchedColor && r6[i].innerText != board[5][i]) {
          r6[i].innerText = board[5][i];
          r6[i].style.backgroundColor = incorrectColor;
        }
        else {
          r6[i].innerText = board[5][i];
        }
      }
    }, 600);


    // r7
    setTimeout(function() {
      for (let i = 0; i < r7.length; i++) {
        if (r7[i].style.backgroundColor !== untouchedColor && r7[i].innerText == board[6][i]) {
          r7[i].style.backgroundColor = solvedColor;
        }
        else if (r7[i].style.backgroundColor !== untouchedColor && r7[i].innerText != board[6][i]) {
          r7[i].innerText = board[6][i];
          r7[i].style.backgroundColor = incorrectColor;
        }
        else {
          r7[i].innerText = board[6][i];
        }
      }
    }, 700);


    // r8
    setTimeout(function() {
      for (let i = 0; i < r8.length; i++) {
        if (r8[i].style.backgroundColor !== untouchedColor && r8[i].innerText == board[7][i]) {
          r8[i].style.backgroundColor = solvedColor;
        }
        else if (r8[i].style.backgroundColor !== untouchedColor && r8[i].innerText != board[7][i]) {
          r8[i].innerText = board[7][i];
          r8[i].style.backgroundColor = incorrectColor;
        }
        else {
          r8[i].innerText = board[7][i];
        }
      }
    }, 800);


    // r9
    setTimeout(function() {
      for (let i = 0; i < r9.length; i++) {
        if (r9[i].style.backgroundColor !== untouchedColor && r9[i].innerText == board[8][i]) {
          r9[i].style.backgroundColor = solvedColor;
        }
        else if (r9[i].style.backgroundColor !== untouchedColor && r9[i].innerText != board[8][i]) {
          r9[i].innerText = board[8][i];
          r9[i].style.backgroundColor = incorrectColor;
        }
        else {
          r9[i].innerText = board[8][i];
        }
      }
    }, 900);     
};

let easyBoard = [];
newBoard.addEventListener('click', () => {
  easyBoard = displayGrid();
  printUnsolvedBoard();
})


for (let i = 0; i < cell.length; i++) {
  cell[i].addEventListener('click', () => {
  if (cell[i].style.backgroundColor === color) {
    if (cell[i].innerText !== "9") {
        cell[i].innerText = parseFloat(cell[i].innerText) + 1;
        rowNumber = Math.floor(i / (9))
        console.log(board)
    }
    else {
        cell[i].innerText = "1";
  }
  }
}
)};


// unsolvedBoard = board
solveBoard.addEventListener('click', () => {
    setTimeout(function() {
    answer = solveSudoku(easyBoard)
    printSolvedBoard()
    })




















// ########################################################################
// Do not edit below 
function solveSudoku(board) {
  solvePartialSudoku(0, 0, board);
  return board;
}

function solvePartialSudoku(row, col, board) {
  let currentRow = row;
  let currentCol = col;

  if (currentCol === board[currentRow].length) {
    currentRow++
    currentCol = 0;
    if (currentRow === board.length) return true
  }


  if (board[currentRow][currentCol] === 0) {
    return tryDigitsAtPosition(currentRow, currentCol, board);
  }

  return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board) {
    for (let digit = 1; digit < 10; digit++) {
        if (isValidAtPosition(digit, row, col, board)) {
        board[row][col] = digit;
          if (solvePartialSudoku(row, col + 1, board)) return true;
        }
      }

  board[row][col] = 0;
    return false
}

function isValidAtPosition(value, row, col, board) {
  const rowIsValid = !board[row].includes(value);
  const colIsValid = !board.map(r => r[col]).includes(value);

  if (!rowIsValid || !colIsValid) return false;

  // Check
  const subgridRowStart = Math.floor(row / 3) * 3;
  const subgridColStart = Math.floor(col / 3) * 3;
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx;
      const colToCheck = subgridColStart + colIdx;
      const existingValue = board[rowToCheck][colToCheck];

      if (existingValue === value) return false;
    }
  }

  return true
}
})