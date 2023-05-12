import styles from "./styles.module.scss";
import {
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
} from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src="/images/LOGO.png" alt="Offline" />
        <nav>
          <Link href="#inicio">
            <a>Inicio</a>
          </Link>
          <Link href="#about">
            <a>Sobre</a>
          </Link>
          <Link href="#OurService">
            <a>Nossos Serviços</a>
          </Link>
          <Link href="#organic">
            <a>Funil Orgânico</a>
          </Link>
          <Link href="#paid">
            <a>Funil Pago</a>
          </Link>
          <Link href="#contact">
            <a>Contato</a>
          </Link>
        </nav>
        <FaPhoneSquareAlt color="95dbfe" className={styles.icons} />
        <FaFacebookSquare color="95dbfe" className={styles.icons} />
        <FaInstagramSquare color="95dbfe" className={styles.icons} />
        <div className={styles.whatsapp}>
          <FaWhatsapp />
          <span>(11)96667-3029</span>
        </div>
      </div>
    </header>
  );
}
