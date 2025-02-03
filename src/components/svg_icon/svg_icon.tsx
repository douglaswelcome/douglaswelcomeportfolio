import { useEffect, useState } from "react"

export interface SvgIconProps {
  width?: number
  height?: number
  fill: string
  path: string
  className?: string
}

export default function SvgIcon({ width = 24, height = 24, fill, path, className }: SvgIconProps) {
  const [svgContent, setSvgContent] = useState<string>("")

  useEffect(() => {
    fetch(`/icons/${path}`)
      .then((response) => response.text())
      .then((svgText) => {
        const updatedSvgText = svgText
          .replace(/fill="white"/g, `fill="${fill}"`)
          .replace("<svg", `<svg style="width: 100%; height: 100%;"`)
        setSvgContent(updatedSvgText)
      })
      .catch((error) => console.error("Error loading SVG:", error))
  }, [path, fill])

  return (
    <div style={{ width, height }} className={className}>
      <div dangerouslySetInnerHTML={{ __html: svgContent }} />
    </div>
  )
}

