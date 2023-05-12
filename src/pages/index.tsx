import type { NextPage } from "next";
import { AboutPage } from "../components/about";
import Header from "../components/header";
import HomePage from "../components/homePage";
import Organic from "../components/organic";
import styles from "./home.module.scss";
import { OurService } from "../components/OurService";
import Paid from "../components/paid";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container} id="home">
        <Header />
        <HomePage />
      </div>
      <div>
        <AboutPage />
      </div>
      <OurService />
      <Organic />
      <Paid/>
      <Footer/>
    </>
  );
};

export default Home;
