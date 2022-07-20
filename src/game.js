const findSequences = (indices, grid, turn) => {
    let out = [],
        cur = [];
    for (const [i, j] of indices){
        if (grid[i][j] === turn){
            cur.push([i, j]);
        } else {
            if (cur.length === 5) out.push(cur);
            cur = [];
        }
    }
    if (cur.length === 5) out.push(cur);
    return out;
}

const primaryDiagonal = (grid, i, j) => {
    const startX = i - Math.min(i, j);
    const startY = j - Math.min(i, j);
    const count = Math.min(grid.length - startX, grid.length - startY);
    return grid.slice(startX, startX + count).map((_, index) => [startX + index, startY + index]);
}

const secondaryDiagonal = (grid, i, j) => {
    const startX = i - Math.min(i, grid.length - j);
    const startY = j + Math.min(i, grid.length - j);
    const count = Math.min(grid.length - startX, startY + 1);
    return grid.slice(startX, startX + count).map((_, index) => [startX + index, startY - index]);
}

export const findPaths = (grid, turn, i, j) => {
    const horizontal = grid[i].map((_, index) => [i, index]);
    const vertical = grid.map((_, index) => [index, j]);
    const prim = primaryDiagonal(grid, i, j);
    const sec = secondaryDiagonal(grid, i, j);
    return [horizontal, vertical, prim, sec].map(group => findSequences(group, grid, turn)).flat();
};