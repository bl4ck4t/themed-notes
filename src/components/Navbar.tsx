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
            
                {themeName == "light" ?
                    <button onClick={toggleTheme} id={styles["toggle-theme-dark"]} className="material-symbols-outlined">
                    nights_stay
                    </button>
                : 
                    <button onClick={toggleTheme} id={styles["toggle-theme-light"]} className="material-symbols-outlined">
                        sunny
                    </button>
                }
                
                
            </div>
        </div>
    </>
  )
}
