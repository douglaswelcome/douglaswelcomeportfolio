import { SvgLogo } from "@/components/svg_logo"

interface BluevineLogoProps {
  fill?: string
}

export const BluevineLogo: React.FC<BluevineLogoProps> = ({ fill }) => (
  <SvgLogo src="/logos/bluevine.svg" alt="Bluevine Logo" fill={fill || "#fff"} />
)

export default BluevineLogo

