"use client";
import {
  End_Tile_Configuration,
  Start_Tile_Configuration,
} from "@/app/utils/constants";
import { createGrid } from "@/app/utils/helpers";
import { AlgoType, GridType, MazeType } from "@/app/utils/types";
import { createContext, ReactNode, useState } from "react";

interface PathfindingContextInterface {
  algo: AlgoType;
  setAlgo: (algo: AlgoType) => void;

  maze: MazeType;
  setMaze: (maze: MazeType) => void;

  grid: GridType;
  setGrid: (grid: GridType) => void;

  isGraphVis: boolean;
  setIsGraphVis: (isGraphVis: boolean) => void;
}

export const PathfindingContext = createContext<
  PathfindingContextInterface | undefined
>(undefined);

export const PathFindingProvider = ({ children }: { children: ReactNode }) => {
  const [algo, setAlgo] = useState<AlgoType>("A_Star");
  const [maze, setMaze] = useState<MazeType>("NONE");
  const [grid, setGrid] = useState<GridType>(
    createGrid(Start_Tile_Configuration, End_Tile_Configuration)
  );
  const [isGraphVis, setIsGraphVis] = useState<boolean>(false);

  return (
    <PathfindingContext.Provider
      value={{
        algo,
        setAlgo,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVis,
        setIsGraphVis,
      }}
    >
      {children}
    </PathfindingContext.Provider>
  );
};
