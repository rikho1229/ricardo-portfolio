import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
    <h1 className="sectionTitle">Programming Languages</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python"/>
        <SkillList src={checkMarkIcon} skill="JavaScript"/>
        <SkillList src={checkMarkIcon} skill="HTML"/>
        <SkillList src={checkMarkIcon} skill="CSS"/>
        <SkillList src={checkMarkIcon} skill="C"/>
    </div>
    <hr />
    <h1 classname="sectionTitle">technologies/frameworks</h1>
    <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git/Github"/>
        <SkillList src={checkMarkIcon} skill="Docker"/>
        <SkillList src={checkMarkIcon} skill="mySQL"/>
        <SkillList src={checkMarkIcon} skill="React JS"/>
    </div>
    <hr />
  </section>
  );
}

export default Skills
