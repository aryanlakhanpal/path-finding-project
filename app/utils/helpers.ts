import { Max_Cols, Max_Rows } from "./constants";
import { GridType, TileType } from "./types";


const createRow=(row:number, startTile:TileType, endTile:TileType)=>{
    const currRow = []

    for(let col =0; col<Max_Cols;col++){
        currRow.push({
            row,
            col,
            isEnd:row === endTile.row && col === endTile.col,
            isStart:row === startTile.row && col=== startTile.col,
            distance:Infinity,
            isPath:false,
            isTraversed:false,
            isWall:false,
            parent:null
        })
    }
    return currRow
}

export const createGrid = (startTile : TileType, endTile : TileType)=>{
    const grid : GridType=[];

    for(let row=0;row<Max_Rows;row++){
        grid.push(createRow(row,startTile,endTile))
    }

    return grid;
}