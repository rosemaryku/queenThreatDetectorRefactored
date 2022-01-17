function generateBoard(whiteQueen, blackQueen) {
  let arr = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];
  let [whiteRow, whiteCol] = whiteQueen;
  let [blackRow, blackCol] = blackQueen;

  arr[whiteRow][whiteCol] = 1;
  arr[blackRow][blackCol] = 1;
  return arr;
}

function queenThreat(generatedBoard) {
  if (
    Math.abs(whiteQueen[0] - blackQueen[0]) ===
      Math.abs(whiteQueen[1] - blackQueen[1]) ||
    whiteQueen[0] === blackQueen[0] ||
    whiteQueen[1] === blackQueen[1]
  ) {
    return true;
  }
  return false;
}
