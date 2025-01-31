import { useState, useEffect } from "react"

interface SvgIconProps {
  width?: number
  height?: number
  fill?: string
  path: string
  className?: string
}

export default function SvgIcon({ width = 24, height = 24, fill = "currentColor", path, className }: SvgIconProps) {
  const [svgContent, setSvgContent] = useState<string>("")

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((svgText) => {
        // Replace the fill attribute in the SVG content
        const updatedSvgText = svgText.replace(/fill="[^"]*"/g, `fill="${fill}"`)
        setSvgContent(updatedSvgText)
      })
      .catch((error) => console.error("Error loading SVG:", error))
  }, [path, fill])

  return (
    <div
      style={{ width, height }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
      role="img"
      aria-label={`${path.split("/").pop()?.replace(".svg", "")} icon`}
      className={className}
    />
  )
}

