import styles from "@/components/navbar/navbar.module.scss";
import Logo from "@/components/logo";
// import Navitem from "@/components/navitem";

export default function Navbar() {
    return (
      <div className="flex justify-center">
      <div className={`page-width ${styles.navbar}`}>
        <div className={styles.navlogo}>
          <Logo />
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