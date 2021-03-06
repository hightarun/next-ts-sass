import Head from "next/head";
import styles from "./comp2.module.scss";

interface Props {
  msg?: String;
  int?: Number;
}

const Component2: React.FC<Props> = ({ msg, int }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="description" content="Index Page" />
        <title>Page 1</title>
      </Head>
      <h1>i m component2</h1>

      <p>{msg}</p>
      <p>{int}</p>
    </div>
  );
};

export default Component2;
