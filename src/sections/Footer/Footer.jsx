import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id="footer" className={styles.container}>
        <p>
            &copy; 2025 Ricardo Lazo.  <br />
            All Rights Reserverd.
        </p>
    </section>
  );
}

export default Footer
