"use client"
import React, { useState } from "react"
import AlurchopFryer from "./game"
import { View } from "@/components/base/view"
import { Box } from "@/components/base/animated/box"
import { Text } from "@/components/base/text"

export default function index() {
  const [location, setLocation] = useState("0")
  const [destination, setDestination] = useState("z")
  const [nextDestination, setNextDestination] = useState(".")
  const [nextDestinationTimer, setNextDestinationTimer] = useState("20")

  return (
    <View direction="horizontal">
      <AlurchopFryer location="location" destination="destination" />
      <View
        direction="vertical"
        centered
        className="my-12 flex h-fit gap-10 py-12  "
      >
        <Box direction="vertical" centered>
          <Text>Current location is {location}</Text>
        </Box>
        <Box direction="vertical" centered>
          <Text>Current destination is {destination}</Text>
        </Box>
        <Box direction="vertical" centered>
          <Text>Next destination is {nextDestination}</Text>
        </Box>
        <Box direction="vertical" centered>
          <Text>
            The destination is going to change in {nextDestinationTimer} second
          </Text>
        </Box>
      </View>
    </View>
  )
}
