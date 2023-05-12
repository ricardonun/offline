import styles from "./styles.module.scss";
import Image from "next/image";

export function AboutPage() {
  return (
    <main id="about" className={styles.container}>
      <section className={styles.section}>
        <h4 className={styles.title}>
          O que faz a{" "}
          <Image
            src="/images/offlineGreen.png"
            width="150"
            height="48"
            alt="Offline"
          />
          <br /> ser o<span className={styles.span}> MELHOR NEGOCIO?</span>
        </h4>
        <hr className={styles.divider} />
        <h3 className={styles.subTitle}>
          Somos uma agência de marketing digital, <br /> com foco em gestao de
          tráfego
        </h3>

        <p className={styles.paragraf}>
          Nosso foco é no resultado e na escala de negócios.
          <br />
          Não queremos reinventar a roda, apenas fazê-la girar de forma
          eficiente.
          <br />
          Traremos o alcance que você merece, de maneira inteligente.
          <br />
          Com nossa <span className={styles.pSpan}>Metodologia 2P</span> , unimos a estrutura do tráfego
          orgânico,
          <br />
          com a agilidade e inteligência dos algoritmos pagos, ciando uma <br />
          estrutura avançada, que opera nos 2 segmentos digitais, por um preço
          <br />
          competitivo, leads mais qualificados e com resulktados mais rápidos.
          <br />
          <br />
          <span className={styles.impactSentence}>"Não trabalhe duro, trabalhe inteligente"</span>
        </p>
      </section>
      <section className={styles.imgSectionAbout}>
        <img className={styles.img} src="/images/about.png" alt="sobre" />
        <button className={styles.btnAbout}>Agende seu horário</button>
      </section>
    </main>
  );
}
