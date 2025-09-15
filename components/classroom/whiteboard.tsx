"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Square, Circle, Minus, Type, Eraser, RotateCcw, Download, Upload } from "lucide-react"

export function Whiteboard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = useState(false)
  const [tool, setTool] = useState("pen")
  const [color, setColor] = useState("#000000")
  const [brushSize, setBrushSize] = useState([3])
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 })

  const colors = [
    "#000000",
    "#FF0000",
    "#00FF00",
    "#0000FF",
    "#FFFF00",
    "#FF00FF",
    "#00FFFF",
    "#FFA500",
    "#800080",
    "#008000",
    "#800000",
    "#000080",
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Set default styles
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
  }, [])

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setIsDrawing(true)
    setLastPosition({ x, y })
  }

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return

    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.globalCompositeOperation = tool === "eraser" ? "destination-out" : "source-over"
    ctx.strokeStyle = color
    ctx.lineWidth = brushSize[0]

    ctx.beginPath()
    ctx.moveTo(lastPosition.x, lastPosition.y)
    ctx.lineTo(x, y)
    ctx.stroke()

    setLastPosition({ x, y })
  }

  const stopDrawing = () => {
    setIsDrawing(false)
  }

  const clearCanvas = () => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const saveCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const link = document.createElement("a")
    link.download = "whiteboard.png"
    link.href = canvas.toDataURL()
    link.click()
  }

  return (
    <div className="h-full flex flex-col">
      {/* Toolbar */}
      <div className="border-b p-4 bg-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Tools */}
            <div className="flex items-center space-x-2">
              <Button variant={tool === "pen" ? "default" : "outline"} size="sm" onClick={() => setTool("pen")}>
                <Minus className="h-4 w-4" />
              </Button>
              <Button
                variant={tool === "rectangle" ? "default" : "outline"}
                size="sm"
                onClick={() => setTool("rectangle")}
              >
                <Square className="h-4 w-4" />
              </Button>
              <Button variant={tool === "circle" ? "default" : "outline"} size="sm" onClick={() => setTool("circle")}>
                <Circle className="h-4 w-4" />
              </Button>
              <Button variant={tool === "text" ? "default" : "outline"} size="sm" onClick={() => setTool("text")}>
                <Type className="h-4 w-4" />
              </Button>
              <Button variant={tool === "eraser" ? "default" : "outline"} size="sm" onClick={() => setTool("eraser")}>
                <Eraser className="h-4 w-4" />
              </Button>
            </div>

            {/* Colors */}
            <div className="flex items-center space-x-1">
              {colors.map((c) => (
                <button
                  key={c}
                  className={`w-6 h-6 rounded-full border-2 ${color === c ? "border-gray-800" : "border-gray-300"}`}
                  style={{ backgroundColor: c }}
                  onClick={() => setColor(c)}
                />
              ))}
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-6 h-6 rounded-full border-2 border-gray-300 cursor-pointer"
              />
            </div>

            {/* Brush Size */}
            <div className="flex items-center space-x-2">
              <span className="text-sm">Taille:</span>
              <Slider value={brushSize} onValueChange={setBrushSize} max={20} min={1} step={1} className="w-20" />
              <span className="text-sm w-6">{brushSize[0]}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Upload className="h-4 w-4 mr-2" />
              Importer
            </Button>
            <Button variant="outline" size="sm" onClick={saveCanvas}>
              <Download className="h-4 w-4 mr-2" />
              Exporter
            </Button>
            <Button variant="outline" size="sm" onClick={clearCanvas}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Effacer
            </Button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <div className="flex-1 relative">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full cursor-crosshair"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
        />
      </div>
    </div>
  )
}
