import styles from "../styles/About.module.css"
import Image from "next/image"

export default function About() {
    return (
        <section id="about" className={styles.ab_layout}>
            <svg width="713" height="417" viewBox="0 0 913 617" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M144.509 125.756C-65.3382 185.927 -1.29437 362.654 56.9585 443.495C73.164 494.763 248.655 519.86 334.375 526C412.312 509.115 516 475.73 516 417.017C516 351.025 456.938 231.286 440.466 186.004C415.059 116.163 354.357 65.5856 144.509 125.756Z" fill="#EFEFEF" />
                <path d="M255.692 38.6621C-115.608 125.607 -2.29023 380.97 100.781 497.784C129.455 571.864 439.965 608.128 591.636 617C729.537 592.602 913 544.361 913 459.523C913 364.168 808.498 191.148 779.351 125.718C734.397 24.7997 626.992 -48.2827 255.692 38.6621Z" fill="#EFEFEF" fill-opacity="0.62" />
            </svg>

            <div className={styles.left}>
                <div className={styles.me}>
                    <Image
                        src="/me.svg"
                        width="300px"
                        height="300px"
                        alt="Avatar"
                    />
                </div>
            </div>

            <div className={styles.right}>
                <p>
                    A self-taught developer, learning new technologies every day.
                    A well-organized person, problem solver, and a guy
                    with acute attention to detail and creativity. Fan of
                    Anime, outdoor activities, painting are some of my hobbies.
                    Interested in the entire front-end and back-end spectrum
                    on ambitious projects with a great team.
                </p>
            </div>
        </section>
    )
}