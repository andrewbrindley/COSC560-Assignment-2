// lazy so re-used code from assignment 1 where I treated grid as a 2d array, whereas here it's just 1d, so wrote this chunking function
// to convert to 2d

export const getTurn = (grid) => {
    const count = grid.reduce((a, v) => a + (v < 0 ? 0 : !v ? -1 : 1), 0);
    return count % 2 ? 1 : 0;
}

export const group = (grid, n) => {
    return !grid.length ? [] : [grid.slice(0, n), ...group(grid.slice(n), n)];
}

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
    grid = group(grid, Math.sqrt(grid.length));
    const horizontal = grid[i].map((_, index) => [i, index]);
    const vertical = grid.map((_, index) => [index, j]);
    const prim = primaryDiagonal(grid, i, j);
    const sec = secondaryDiagonal(grid, i, j);
    return [horizontal, vertical, prim, sec].map(group => findSequences(group, grid, turn)).flat();
};