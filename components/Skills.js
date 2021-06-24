import styles from "../styles/Skills.module.css";

export default function Skills() {
    return (
        <section id="skills" className={styles.skillsLayout}>
            <svg width="707" height="617" viewBox="0 0 707 617" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M49.692 38.6621C-321.608 125.607 -208.29 380.97 -105.219 497.784C-76.545 571.864 233.965 608.128 385.636 617C523.537 592.602 707 544.361 707 459.523C707 364.168 602.498 191.148 573.351 125.718C528.397 24.7997 420.992 -48.2827 49.692 38.6621Z" fill="url(#paint0_linear)" fill-opacity="0.37" />
                <defs>
                    <linearGradient id="paint0_linear" x1="250.5" y1="0" x2="250.5" y2="617" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#E6E6E6" />
                        <stop offset="0.9999" stop-color="#8388FF" stop-opacity="0.276042" />
                        <stop offset="1" stop-color="#D5D5D5" stop-opacity="0" />
                    </linearGradient>
                </defs>
            </svg>
            <div className={styles.secHead}>
                <h1>SKILLS</h1>
                <div className={styles.belowHead}>
                    <hr className={styles.hr} />
                    <p className={styles.handsOn}>HANDS ON</p>
                </div>
            </div>

            <div className={styles.skills}>
                <ul>
                    <li>C/CPP</li>
                    <li>HTML CSS</li>
                    <li>JS</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>React JS</li>
                    <li>Express JS</li>
                    <li>Node JS</li>
                </ul>
                <ul>
                    <li>Oracle</li>
                    <li>MySQL</li>
                    <li>Firebase</li>
                    <li>MongoDB</li>
                    <li>Machine Learning</li>
                    <li>Android Development [Java]</li>
                </ul>
                <ul>
                    <li>Adobe Illustrator</li>
                    <li>Adobe XD</li>
                    <li>Adobe Photoshop CC</li>
                    <li>Figma</li>
                </ul>
            </div>
        </section>
    )
}
