function validSolution(board) {
  function isValidGroup(group) {
    let sorted = [...group].sort((a, b) => a - b);
    let digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < group.length; i++) {
      if (digits[i] !== sorted[i]) return false;
    }
    return true;
  }

  for (let i = 0; i < 9; i++) {
    if (!isValidGroup(board[i])) return false;
  }

  for (let i = 0; i < 9; i++) {
    let column = [];
    for (let j = 0; j < 9; j++) {
      column.push(board[j][i]);
    }
    if (!isValidGroup(column)) return false;
  }

  for (let row = 0; row < 9; row += 3) {
    for (let col = 0; col < 9; col += 3) {
      let block = [];
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          block.push(board[row + r][col + c]);
        }
      }
      if (!isValidGroup(block)) return false;
    }
  }

  return true;
}

console.log(
  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ])
);
