import styles from '../../styles/Profile.module.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import axios from 'axios';

function Profile({produto = {} }){
    return (
        <div>
        <Navbar/>
        <div className={styles.profile}>
            <p>{produto.title}</p>
            <p>{produto.description}</p>
            <p>{produto.price}</p>
            <img src={produto.image}/>
        </div>
        <Footer/>
        </div>
    )
}

export async function getStaticProps(context) {
    const response = await axios.get(
        'https://fakestoreapi.com/products/' + context.params.id
    );

    const produto = await response.data;
    return {
        props: {produto}
    }
};

export async function getStaticPaths() {
    const response = await axios.get (
        'https://fakestoreapi.com/products/'
    );
    const produtos = await response.data;
    const paths = produtos.map((produto) => {
        return {params:{id:String(produto.id)}};
    });
    return {
        paths,
        fallback: true,
    };
}

export default Profile;