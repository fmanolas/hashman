import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "./components/Header";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>HMan - Home</title>
        <meta name="description" content="Welcome to HMan's home page!" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Header />
      <main>
        <div className="sky">
          <div className="moon"></div>
        </div>

        <div className="skyline"></div>

        <div className="light">
          <div id="hatman-logo">
            <div className="vertical-bar"></div>
            <div className="vertical-bar right"></div>
            <div className="horizontal-bar top"></div>
            <div className="horizontal-bar bottom"></div>
          </div>
        </div>

        <div className="skyline"></div>
        <div className="batman">
          <div className="head">
            <div className="ears">
              <span></span>
              <span></span>
            </div>
            <div className="nose"></div>
            <div className="mouth"></div>
          </div>
          <div className="body">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="leg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="leg">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="foot"></div>
          <div className="foot"></div>
          <div className="cape">
            <div className="cape-shape"></div>
          </div>
          <div className="watchtower">
            <span></span>
            <span></span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
