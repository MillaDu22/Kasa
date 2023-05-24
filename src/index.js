import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Home.css';
import './Styles/Home.css';
import './Styles/Banner.css';
import './Styles/Header.css';
import Home from './components/Pages/Home/index.jsx';
import Header from './components/Header/index.jsx';
import NavHeader from './components/NavHeader/index.jsx';
import Banner from './components/Banner/index.jsx';
import GalleryCards from './components/GalleryCards/index.jsx';
import Footer from './components/Footer/index.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <Home />
    <Header />
    <NavHeader />
    <Banner />
    <GalleryCards />
    <Footer />
    </React.StrictMode>

);
reportWebVitals();