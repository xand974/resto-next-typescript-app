import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta
          name="description"
          content="Web site created by Alexandre Malet"
        />
      </Head>
      <Layout>
        <Hero />
        {/* <ProductList /> */}
      </Layout>
    </div>
  );
};

export default Home;
