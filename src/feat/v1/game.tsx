import { View } from "~/view"
import React from "react"
import { Grid } from "./components/grid"

type GameState = {
  location: string
  destination: string
}

export default function AlurchopFryer({ location, destination }: GameState) {
  console.log()
  return <Grid rows={6} cols={8} />
}
