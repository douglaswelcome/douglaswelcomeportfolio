import { SvgLogo } from "@/components/svg_logo"

interface MekanoidLogoProps {
  fill?: string
}

export const MekanoidLogo: React.FC<MekanoidLogoProps> = ({ fill }) => (
  <SvgLogo src="/logos/mekanoid.svg" alt="Mekanoid Logo" fill={fill || "#fff"} />
)

export default MekanoidLogo

