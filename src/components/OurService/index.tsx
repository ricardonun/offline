import Image from "next/image";
import styles from "./styles.module.scss";

export function OurService() {
  return (
    <main className={styles.main} id="OurService">
      <section className={styles.section}>
        <div className={styles.left}>
          <Image
            width={250}
            height={350}
            src="/images/vetores/CardVazi.svg"
            alt="Tráfego Orgânico"
          />
          <Image
            width={250}
            height={350}
            style={{ marginLeft: "1rem" }}
            src="/images/vetores/CardTOrg.svg"
            alt="Tráfego Orgânico"
          />
        </div>
        <div className={styles.center}>
          <div>
            <h3>
              Nosso
              <span>Serviços</span>
            </h3>
          </div>
          <div className={styles.divImage}>
            <Image
              width={250}
              height={350}
              src="/images/vetores/CardIV.svg"
              alt="Card Indentidade vizual"
            />
            <Image
              width={250}
              height={350}
              style={{ marginLeft: "1rem" }}
              src="/images/vetores/CardAO.svg"
              alt="Card Analise e otimizicao"
            />
          </div>
        </div>
        <div className={styles.right}>
          <Image
            width={250}
            height={350}
            style={{ marginRight: "1rem" }}
            src="/images/vetores/CardTP.svg"
            alt="Tráfego Orgânico"
          />
        </div>
      </section>
    </main>
  );
}
