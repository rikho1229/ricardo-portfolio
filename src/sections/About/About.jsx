import styles from './AboutStyles.module.css'

function About() {
  return (
    <section id="about" className={styles.container}>
        <h1 className="sectionTitle">About</h1>
        <p className={styles.about}>
        I am a highly motivated third-year Computer Science student with a strong passion 
        for software development, particularly in backend development. 
        I primarily enjoy working with Python for backend development, 
        but I am also proficient in other languages and adaptable to learning new technologies as needed.
        Through my education, I have built a solid foundation in programming and problem-solving. In addition, I continuously 
        expand my knowledge by exploring new programming languages and frameworks in my free time. 
        I am always eager to learn more and fully immerse myself in any project I take on. 
        </p>
    </section>
  )
}

export default About
