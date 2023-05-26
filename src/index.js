import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Styles/Home.css';
import './Styles/AProposPage.css';
import './Styles/LogementPage.css';
import './Styles/Error.css';
import './Styles/Header.css';
import './Styles/NavHeader.css';
import './Styles/Banner.css';
import './Styles/GalleryCards.css';
import './Styles/Footer.css';
import './Styles/BannerAPropos.css';
import Home from './Pages/Home/index.jsx';
import AProposPage from './Pages/AProposPage/index.jsx'
import LogementPage from './Pages/LogementPage/index.jsx';
import Error from './Pages/Error/index.jsx';
import Header from './components/Header/index.jsx';
import NavHeader from './components/NavHeader/index.jsx';
import Banner from './components/Banner/index.jsx';
import GalleryCards from './components/GalleryCards/index.jsx';
import Footer from './components/Footer/index.jsx';
import reportWebVitals from './reportWebVitals';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
                <Home />
                <Header />
                <NavHeader />
                <Banner />
                <GalleryCards />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/AProposPage" element={<AProposPage />} />
                        <Route path="/LogementPage" element={<LogementPage />} />
                        <Route path="*" element={<Error />} />       
                    </Routes>
                    <Footer />
        </Router>
    </React.StrictMode>
);
reportWebVitals();