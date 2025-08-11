export const Max_Rows = 39;
export const Max_Cols = 49;

export const Start_Tile_Configuration={
    row : 1,
    col : 1,
    distance : 0,
    isStart :  false,
    isEnd  :  false,
    isWall  :  false,
    isPath : false,
    parent : null,
    isTraversed : false

}

export const End_Tile_Configuration={
    row : Max_Rows-2,
    col : Max_Cols-2,
    distance : 0,
    isStart :  false,
    isEnd  :  false,
    isWall  :  false,
    isPath : false,
    parent : null,
    isTraversed : false

}