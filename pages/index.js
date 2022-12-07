import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Home.module.css'
import axios from 'axios';

export default function Home(){
  return (
    <div>
      <Head>
        <title>Projeto Final</title>
      </Head>

      <Navbar/> 

      <div  className={styles.home}>
      <h1> Projeto Final - Fake Store </h1>
      <a href="\produtos"> Abrir Produtos</a>
      </div>

      <Footer/>
      
    </div>
  )
}