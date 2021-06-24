import styles from "../styles/Projects.module.css"
import ProjectCard from "./ProjectCard"

import data from "./data/projects.json";

export default function Projects() {
    return (
        <section id="projects" className={styles.projectsWrapper}>
            <h1>PROJECTS</h1>
            <main className={styles.projects}>
                {
                    data.map((proj, index) => {
                        return (
                            <ProjectCard url={proj.url} title={proj.proj_title} stack={proj.proj_stack} description={proj.proj_desc} />
                        )
                    })
                }
            </main>
        </section>
    )
}
