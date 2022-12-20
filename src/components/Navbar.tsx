import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import styles from "../css/navbar.module.css"

export default function Navbar() {
    const {themeName, toggleTheme} = useContext(ThemeContext)

  return (
    <>
        <div className={styles.navbar}>
            <div className={styles["left-bar"]}>
                <span className={styles.logo}>
                    Toggle Theme
                </span>
            </div>
            
            <div className={styles["right-bar"]}>     
                <button onClick={toggleTheme} id={styles["toggle-theme"]} className={`material-symbols-outlined ${styles[themeName == "dark" ? "dark" : "light"]}`}>
                {themeName == "light" ? "nights_stay" : "sunny"}
                </button>
            </div>
        </div>
    </>
  )
}
