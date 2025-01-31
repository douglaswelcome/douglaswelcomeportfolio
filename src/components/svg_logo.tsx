import type React from "react"
import { useMemo, useEffect, useState } from "react"

interface SvgLogoProps {
  width?: number
  height?: number
  src: string
  alt: string
  fill?: string
}

export const SvgLogo: React.FC<SvgLogoProps> = ({ width, height, src, alt, fill }) => {
  const [svgContent, setSvgContent] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const style = useMemo(() => {
    const baseStyle: React.CSSProperties = {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "flex-start", // Changed to left-align the content
      overflow: "hidden",
    }

    if (width !== undefined && height !== undefined) {
      return { ...baseStyle, width, height }
    } else if (width !== undefined) {
      return { ...baseStyle, width, height: "auto" }
    } else if (height !== undefined) {
      return { ...baseStyle, height, width: "auto" }
    } else {
      return { ...baseStyle, width: 24, height: 24 } // Default size
    }
  }, [width, height])

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        return response.text()
      })
      .then((svgText) => {
        // Remove width and height attributes from the SVG
        svgText = svgText.replace(/(width|height)="[^"]*"/g, "")

        // Add viewBox if it doesn't exist
        if (!svgText.includes("viewBox")) {
          const widthMatch = svgText.match(/width="([^"]*)"/)
          const heightMatch = svgText.match(/height="([^"]*)"/)
          if (widthMatch && heightMatch) {
            const viewBox = `viewBox="0 0 ${widthMatch[1]} ${heightMatch[1]}"`
            svgText = svgText.replace("<svg", `<svg ${viewBox}`)
          }
        }

        // Replace fill color if provided
        if (fill) {
          svgText = svgText.replace(/fill="[^"]*"/g, `fill="${fill}"`)
        }

        // Add preserveAspectRatio attribute and set width and height to 100%
        svgText = svgText.replace("<svg", '<svg width="100%" height="100%" preserveAspectRatio="xMinYMid meet"')

        setSvgContent(svgText)
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("Error loading SVG:", error)
        setError("Failed to load SVG")
        setIsLoading(false)
      })
  }, [src, fill])

  if (isLoading) {
    return <div style={style}>Loading...</div>
  }

  if (error) {
    return <div style={style}>{error}</div>
  }

  if (!svgContent) {
    return null
  }

  return (
    <div style={style}>
      <div
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
        }}
        dangerouslySetInnerHTML={{ __html: svgContent }}
        role="img"
        aria-label={alt}
      />
    </div>
  )
}

