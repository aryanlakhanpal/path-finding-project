export type AlgoType = "A_Star" | "BFS" | "DFS" | "Dijkstra";

export type MazeType = "NONE" | "BinaryTree"|"RecursiveDivision";


export type TileType={
    row:number;
    col:number;
    distance:number;
    isStart:boolean;
    isEnd:boolean;
    isWall:boolean;
    isPath:boolean;
    parent:TileType|null;
}

export type GridType = TileType[][]

export type SpeedType = 2 | 1 | 0.5