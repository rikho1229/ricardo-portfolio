import styles from './ProfileStyles.module.css'
import mePFP from '../../assets/mePFP.jpg'
import themeIcon from '../../assets/sun.svg'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import instagramLight from '../../assets/instagram-light.svg'
import instagramDark from '../../assets/instagram-dark.svg'
import CV from '../../assets/Ricardo_s_2025_resume.pdf'
import { useTheme } from '../../common/ThemeContext'

function Profile() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ?  linkedinLight : linkedinDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const instagramIcon = theme === 'light' ? instagramLight : instagramDark;

  return (
    <section id="profile" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
              className={styles.profile}
              src={mePFP} 
              alt="Profile picture of Ricardo Lazo" 
            />
            <img
              className={styles.colorMode}
              src={themeIcon}
              alt="Color mode Icon"
              onClick={toggleTheme}
            />
        </div>
        <div className={styles.info}>
          <h1>
            Ricardo
            <br />
            Lazo
          </h1>
          <h2>Backend Developer</h2>
          <span>
            <a href="https://www.linkedin.com/in/ricardolazoo/" target="_blank">
              <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </a>
            <a href="https://github.com/rikho1229" target="_blank">
              <img src={githubIcon} alt="Github Icon"/>
            </a>
            <a href="https://www.instagram.com/rricardolazo/" target="_blank">
              <img src={instagramIcon} alt="Instagram Icon"/>
            </a>
          </span>
          <p className={styles.description}>
            Aspiring software developer with a passion for developing projects in python.
          </p>
          <a href={CV} download>
            <button className="hover">
              Resume
            </button>
          </a>
        </div>
    </section>
  )
}

export default Profile;
