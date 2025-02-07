import styles from './ProjectsStyles.module.css'
import discord from '../../assets/discord-icon.png'
import employee from '../../assets/employee-database.png'
import personal_portfolio from '../../assets/man-icon.png'

function Projects() {
  return (
  <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <a href="https://github.com/rikho1229/Course-Allocater" target="_blank">
        <img className="hover" src={discord} alt="discord logo" />
        <h3>Walter</h3>
        <p>discord bot</p>
      </a>

      <a href="https://github.com/rikho1229/Employee-Database" target="_blank">
        <img className="hover" src={employee} alt="employee icon" />
        <h3>Employee Database</h3>
        <p>some description</p>
      </a>

      <a href="https://github.com/rikho1229/ricardo-portfolio" target="_blank">
        <img className="hover" src={personal_portfolio} alt="Personal Porfolio" />
        <h3>Portfolio</h3>
        <p>Programming languages used</p>
      </a>

    </div>
  </section>
  );
}

export default Projects
