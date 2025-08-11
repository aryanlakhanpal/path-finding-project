"use client";
import {
  End_Tile_Configuration,
  Start_Tile_Configuration,
} from "@/app/utils/constants";
import { TileType } from "@/app/utils/types";
import { createContext, ReactNode, useState } from "react";

interface TileContextInterface {
  startTile: TileType;
  setStartTile: (startTile: TileType) => void;

  endTile: TileType;
  setEndTile: (endTile: TileType) => void;
}

export const TileContext = createContext<TileContextInterface | undefined>(
  undefined
);

export const TileProvider = ({ children }: { children: ReactNode }) => {
  const [startTile, setStartTile] = useState<TileType>(
    Start_Tile_Configuration
  );
  const [endTile, setEndTile] = useState<TileType>(End_Tile_Configuration);

  return (
    <TileContext.Provider
      value={{
        startTile,
        setStartTile,
        endTile,
        setEndTile,
      }}
    >
      {children}
    </TileContext.Provider>
  );
};
