import styles from "../styles/Header.module.css"

export default function Header() {
    return (
        <>
            <nav className={styles.headerWrapper}>
                <span className={styles.nameLogo}>
                    THE NERD CODER
                </span>
                <ul className={styles.navLinks}>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                </ul>
                <a href="#contact" className={styles.contactBtn}>
                    Contact
                </a>
            </nav>
        </>
    )
}