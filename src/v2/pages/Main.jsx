import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import HomeFooter from '../../components/Home.Footer';

const Main = () => {
    return (
        <>
            <Header />
            <main>
                <Hero />
            </main>
            <Footer />
        </>
    )
}

export default Main