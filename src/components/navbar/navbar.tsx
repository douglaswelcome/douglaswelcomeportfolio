"use client"

import styles from "@/components/navbar/navbar.module.scss";
import Icon from "@/components/svg_icon/svg_icon";
// import Navitem from "@/components/navitem";

export default function Navbar() {
    return (
      <div className="flex justify-center">
      <div className={`page-width ${styles.navbar}`}>
        <div className={styles.navlogo}>
          <Icon path="./icons/dwlogo.svg" width={30} height={20} fill="var(--foreground)" />
        </div>
        <div className={styles.navitems}> 
          {/* <Navitem />
          <Navitem />
          <Navitem /> */}
        </div>
       

      </div>
      </div>
    );
  }