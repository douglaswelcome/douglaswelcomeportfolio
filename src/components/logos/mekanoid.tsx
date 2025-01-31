import { SvgLogo } from "@/components/svg_logo"

interface MekanoidLogoProps {
  width?: number
  height?: number
  fill?: string
}

export const MekanoidLogo: React.FC<MekanoidLogoProps> = ({ width, height, fill }) => (
  <SvgLogo src="/logos/mekanoid.svg" width={width} height={height} alt="Mekanoid Logo" fill={fill} />
)

export default MekanoidLogo