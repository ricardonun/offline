import styles from "./styles.module.scss";
import {
  FaPhoneSquareAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsapp,
  FaBars,
} from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  function handleMenuClick() {
    if (activeMenu) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }

  return (
    <>
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src="/images/logoWhite.png" alt="Offline" />
          <div className={styles.menuBtn} onClick={handleMenuClick}>
            <FaBars style={{width:"3rem", height:"3rem"}}/>
          </div>
          <nav className={styles.menu}>
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

            <Link href="https://api.whatsapp.com/send/?phone=5511966673029">
              <FaPhoneSquareAlt color="95dbfe" className={styles.icons} />
            </Link>
            <Link href="#facebook">
              <FaFacebookSquare color="95dbfe" className={styles.icons} />
            </Link>
            <Link href="#instagram">
              <FaInstagramSquare color="95dbfe" className={styles.icons} />
            </Link>

            <div className={styles.whatsapp}>
              <FaWhatsapp />
              <Link href="https://api.whatsapp.com/send/?phone=5511966673029">
                <span>(11)96667-3029</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <nav
          className={`${styles.navBar} ${
            activeMenu ? `${styles.activeMenu}` : ""
          }`}
        >
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
      </main>
    </>
  );
}
