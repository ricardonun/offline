import { FaCaretRight } from "react-icons/fa";
import styles from "./styles.module.scss";

export default function Paid() {
  return (
    <main className={styles.main} id="paid">
      <section className={styles.left}>
        <img src="/images/funilpaid.png" alt="" />
      </section>
      <section className={styles.right}>
        <h1>
          Como o <span>Tráfego Pago</span> <br /> funciona na prática?
          <hr />
        </h1>
        <h2>
          Diferente das redes orgânicas, os anúncios e ferramentas pagas <br />
          (Google, Facebook e Instagram ADS) <span>VENDEM E NÃO É POUCO </span>
        </h2>
        <div className={styles.pros}>
          <p>
            <span><FaCaretRight/>Pontos Fortes:</span> É a ferramenta <span className={styles.spanP}>OBRIGATÓRIA</span>{" "}
            para qualquer negócio de médio ou grande porte. Porduz resultados
            desde o curto prazo e alcança números esmagadoramente baixos de
            custo por aquisição. É a estatégia com o melhor custo benefício do
            mercado e pode ser configurada por idade, local, gostos e pode ser
            otimizada.
          </p>
          <p>
            <span><FaCaretRight/>Pontos Fracos:</span> No começo, as campanhas atuam com
            públicos frios e precisa queimar um saldo para que o algoritmo possa
            compreender qual o público ideal. O tráfego pago manda as pessoas
            para a rede selecionada., ou seja, também depende de um bom trabalho
            orgânico{" "}
          </p>
        </div>
      </section>
    </main>
  );
}
