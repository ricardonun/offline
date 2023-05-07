import type { NextPage } from "next";
import { AboutPage } from "../components/about";
import Header from "../components/header";
import HomePage from "../components/homePage";

import styles from "./home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container} id="home">
        <Header />
        <HomePage />
      </div>
      <AboutPage />
    </>
  );
};

export default Home;
