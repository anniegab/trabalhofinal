import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Produtos.module.css';
import React from 'react';
import axios from 'axios';
import Link from 'next/link';

function Produtos({produtos}){
    return (
        <div>
            <Head>
                <title> Fake Store - Produtos </title>
            </Head>

            <Navbar/>

            <div className= {styles.produtos}>
            <h1> Produtos </h1>
            {produtos.map((produto) => (
                <div>
                <Link href='/profile/[id]'as={`/profile/${produto.id}`}>
                    <p>{produto.title}</p>
                </Link>
                </div>
                ))}
            </div>

            <Footer/>

        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products/'
    );
    const data = await response.data;

    return {
        props: {produtos:data},
    }
}

export default Produtos;