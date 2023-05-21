import { FaCaretRight } from "react-icons/fa";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Organic() {
  return (
    <main className={styles.main} id="organic">
      <section className={styles.sectionLeft}>
        <div>
          <h1>
            Como o <span>Tráfego Orgânico</span> <br /> funciona na prática?
          </h1>
          <hr />
        </div>
        <div>
          <h2>
            Ao contrário do que se imagina, as redes orgânicas <br />
            (Instagram,Facebook,site,etc) <span>NÃO VENDEM</span>. Elas são a
            sua vitrine
          </h2>
        </div>
        <div className={styles.pros}>
          <p>
            <span>
              <FaCaretRight />
              Pontos Fortes:
            </span>
            o público orgânico é quente e muitos mais qualificado, as
            estratégias de marketing para quem já te segue, são muito mais
            efetivas,
            <br /> pois as pessoas JÁ CONHECEM a marca.{" "}
          </p>

          <p>
            <span>
              <FaCaretRight />
              Pontos Fracos:
            </span>
            Embora seja a estratégia obrigatório para qualquer negócio, demora
            muito para dar retorno. Essa forma de marketing serve para Branding,
            marketing de relacionamento, conteúdo e fidelização.
          </p>
        </div>
      </section>

      <section className={styles.sectionRight}>
        <div>
          <Image
            width={300}
            height={331}
            src="/images/vetores/FunilOrganic.svg"
            alt="Funil Organico"
          />
        </div>
      </section>
    </main>
  );
}
