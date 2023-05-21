import {
  FaCaretRight,
  FaFacebookSquare,
  FaInstagramSquare,
  FaPhoneSquareAlt,
  FaWhatsapp,
  FaWhatsappSquare,
} from "react-icons/fa";
import styles from "./styles.module.scss";
import Image from "next/image";

export default function Footer() {
  const styleIcon = {
    height: "3rem",
    width: "3rem",
    color: "#ffde50",
    cursor: "pointer",
  };
  const styleIconFooter = {
    height: "3rem",
    width: "3rem",
    color: "#5affa4",
    marginLeft: "2rem",
    cursor: "pointer",
  };
  return (
    <div className={styles.main} id="contact">
      <section className={styles.selling}>
        <div className={styles.contacts}>
          <h1>QUER AUMENTAR SUAS VENDAS?</h1>
          <hr />
          <h2>Entre em contato conosco em uma de nossas redes</h2>

          <div className={styles.icons}>
            <FaPhoneSquareAlt style={styleIcon} />
            <FaFacebookSquare style={styleIcon} />
            <FaInstagramSquare style={styleIcon} />

            <div className={styles.divWhatsApp}>
              <FaWhatsapp
                style={{
                  width: "2rem",
                  height: "3rem",
                  marginLeft: "0.8rem",
                  marginRight: "0.8rem",
                  color: "#eaeaea",
                }}
              />
              <span>(11) 96667-3029</span>
            </div>
          </div>
        </div>
        <div>
          <h4>OU</h4>
        </div>
        <div className={styles.form}>
          <h2> Cadastre suas informações e entraremos em contato</h2>
          <form action="" method="post">
            <div className={styles.inputs}>
              <div className={styles.input}>
                <span>Nome</span>
                <input
                  type="text"
                  id="name"
                  placeholder="Digite seu nome aqui"
                />
              </div>
              <div className={styles.input}>
                <span>E-mail</span>
                <input
                  type="email"
                  id="email"
                  placeholder="Digite seu e-mail de contato aqui"
                />
              </div>
              <div className={styles.input}>
                <span>Telefone</span>
                <input type="number" placeholder="(00) 00000-0000" />
              </div>
              <div className={styles.input}>
                <span>Empresa</span>
                <input type="text" placeholder="Nome da sua empresa" />
              </div>
            </div>
            <div className={styles.selectButton}>
              <select name="" id="call-me">
                <option value="callme" selected>
                  Quero que me ligue
                </option>
                <option value="message">Quero que me mande mensagem</option>
              </select>
              <button>QUERO AUMENTAR MINHAS VENDAS</button>
            </div>
          </form>
        </div>
      </section>
      <section className={styles.footer}>
        <div className={styles.div}>
          {" "}
          <div className={styles.mapSite}>
            <h3>Mapa do site</h3>
            <span>Início</span>
            <span>Sobre</span>
            <span>Nosso Serviços</span>
            <span>Funil Organânico</span>
            <span>Funil Pago</span>
            <span>Contato</span>
          </div>
          <div className={styles.aboutUs}>
            <h3>Sobre Nós</h3>
            <p>
              Uma agência de marketing que veio para descomplicar. Otimize suas
              redes sociais e alavanque suas vendas com o poder do tráfego pago
              em todas as suas redes.
            </p>
          </div>
          <div className={styles.logo}>
            <Image
              width={348}
              height={80}
              src="/images/vetores/OfflineWhite.svg"
              alt="Offline"
            />
          </div>
          <div className={styles.social}>
            <div className={styles.icons}>
              <FaWhatsappSquare
                style={{
                  height: "3rem",
                  width: "3rem",
                  color: "#5affa4",
                  marginLeft: "0",
                }}
              />
              <FaInstagramSquare style={styleIconFooter} />
              <FaFacebookSquare style={styleIconFooter} />
              <FaPhoneSquareAlt style={styleIconFooter} />
            </div>

            <div className={styles.email}>
              <input type="email" placeholder="Cadestre seu e-mail" />
              <button>
                <FaCaretRight style={{}} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          &copy; Copyright @offlineagencia. Todos os direitos reservados
        </div>
      </section>
    </div>
  );
}
