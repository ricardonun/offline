import styles from "./styles.module.scss";

export default function HomePage() {
  return (
    <main className={styles.container}>
      <section className={styles.section}>
        Tem um negócio bem estruturado, mas não <br /> sabe como{" "}
        <span>ESCALAR AS VENDAS?</span>
        <br />
        <div className={styles.lastSentence}>
          <span className={styles.p}>Fique tranquilo, resolver isso é </span>{" "}
          <span className={styles.secundSpan}> 2P</span>
        </div>
      </section>
    </main>
  );
}
