import { View } from "@/components/base/view"
import React from "react"
import { numberToAlphabet } from "../lib/converter"

type GridProps = {
  cols: number
  rows: number
  renderElement?: (index: number) => React.ReactNode
}

export function Grid({ cols, rows }: GridProps) {
  const items = Array.from({ length: cols * rows }, (_, index) => index + 1)

  return (
    <div className="grid h-screen w-screen grid-cols-8 gap-1 px-12 py-6">
      {items.map((item) => (
        <div
          key={item.toString()}
          className="flex h-full w-full items-center justify-center rounded-sm bg-gray-800 px-1 py-0.5"
        >
          {numberToAlphabet(item)}
        </div>
      ))}
    </div>
  )
}
