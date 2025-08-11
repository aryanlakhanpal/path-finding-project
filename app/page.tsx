import React from 'react'
import { PathFindingProvider } from './context/PathfindingContext'
import { TileProvider } from './context/TileContext'

const HomePage = () => {
  return (
    <PathFindingProvider>
      <TileProvider>
      <h1>well</h1>
      </TileProvider>
    </PathFindingProvider>
  )
}

export default HomePage