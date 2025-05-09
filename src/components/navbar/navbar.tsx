
import SvgIconLink from "@/components/svg_icon_link/svg_icon_link"

import styles from "@/components/navbar/navbar.module.scss"

const Navbar = () => {
  return (
    <nav className="bg-primary p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className={styles.navlogo}>
        <SvgIconLink path="dwlogo.svg" width={30} height={20} url="/" />
        </div>
        {/* <ul className="flex space-x-6">
          <li>
            <Link href="/" className="text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul> */}
      </div>
    </nav>
  )
}

export default Navbar

