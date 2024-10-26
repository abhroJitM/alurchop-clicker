"use client"
import React, { useState } from "react"
import { View } from "~/view"
import { Number } from "~/number"
import Image from "next/image"

export default function GameV0() {
  const [score, setScore] = useState(0)

  return (
    <View direction="vertical" centered className="m-8 gap-12">
      <Number value={score} />
      <View onMouseDown={() => setScore(score + 1)}>
        <Image
          src="/alurchop.png"
          height={300}
          width={300}
          className="transition-all active:scale-110"
          alt="alurchop"
        />
      </View>
    </View>
  )
}
