import styles from "./styles.module.scss";
import Image from "next/image";

export function AboutPage() {
  return (
    <main id="about" className={styles.container}>
      <section className={styles.section}>
        <div className={styles.title}>
          <div>
            <h4>
              O que faz a
              <Image
                width={180}
                height={100}
                className={styles.img}
                src="/images/vetores/OfflineGreen.svg"
                alt="sobre"
                layout="responsive"
              />
            </h4>
          </div>
          <div>
            <h4>
              ser o <span className={styles.span}> MELHOR NEGOCIO?</span>
            </h4>
          </div>
        </div>
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
          Com nossa <span className={styles.pSpan}>Metodologia 2P</span> ,
          unimos a estrutura do tráfego orgânico,
          <br />
          com a agilidade e inteligência dos algoritmos pagos, ciando uma <br />
          estrutura avançada, que opera nos 2 segmentos digitais, por um preço
          <br />
          competitivo, leads mais qualificados e com resulktados mais rápidos.
          <br />
          <br />
          <span className={styles.impactSentence}>
            &quot;Não trabalhe duro, trabalhe inteligente&quot;
          </span>
        </p>
      </section>
      <section className={styles.imgSectionAbout}>
        <Image
          width={500}
          height={500}
          className={styles.img}
          src="/images/vetores/OurService.svg"
          alt="sobre"
        />
        <button className={styles.btnAbout}>Agende seu horário</button>
      </section>
    </main>
  );
}
