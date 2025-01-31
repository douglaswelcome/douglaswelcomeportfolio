import { SvgLogo } from "@/components/svg_logo"

interface BluevineLogoProps {
  width?: number
  height?: number
  fill?: string
}

export const BluevineLogo: React.FC<BluevineLogoProps> = ({ width, height, fill }) => (
  <SvgLogo src="/logos/bluevine.svg" width={width} height={height} alt="Bluevine Logo" fill={fill} />
)

export default BluevineLogo