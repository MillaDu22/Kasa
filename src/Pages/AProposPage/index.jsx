import React from 'react';
import Header from '../../components/Header/index';
import NavHeader from '../../components/NavHeader/index.jsx';
import BannerAPropos from '../../components/BannerAPropos/index.jsx';
import Collapses from '../../components/Collapses/index.jsx';
import Footer from '../../components/Footer/index.jsx';
import './AProposPage.css';

function AProposPage() {
    
    return (
        <div className= "AProposPage">
        <Header />
        <NavHeader />
        <BannerAPropos />
        <Collapses />
        <Footer />
        </div>
    )
}
export default AProposPage








