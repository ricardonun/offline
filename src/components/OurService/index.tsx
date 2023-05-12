import styles from "./styles.module.scss";

export function OurService() {
  return (
    <main className={styles.main} id="OurService">
      <section className={styles.section}>
        <div className={styles.left}>
          <img src="/images/CardVazi.png" alt="Card Trafico Organigo 1" />
          <img src="/images/CardTOrg.png" alt="" />
        </div>
        <div className={styles.center}>
          <div>
            <h3>
              Nosso
              <span>Serviços</span>
            </h3>
          </div>
          <div className={styles.divImage}>
            <img src="/images/CardIV.png" alt="Card Indentidade vizual" />{" "}
            <img src="/images/CardAO.png" alt="Card Analise e otimizicao" />
          </div>
        </div>
        <div className={styles.right}>
          <img src="/images/CardTP.png" alt="Card Trafego Pago" />
        </div>
      </section>
    </main>
  );
}
