
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './Pages/Home/Home.css';
import './Pages/AProposPage/AProposPage.css';
import './Pages/LogementPage/LogementPage.css';
import './Pages/Error/Error.css';
import './components/Header/Header.css';
import './components/NavHeader/NavHeader.css';
import './components/Banner/Banner.css';
import './components/GalleryCards/GalleryCards.css';
import './components/Footer/Footer.css';
import './components/BannerAPropos/BannerAPropos.css';

import Home from './Pages/Home/index.jsx';
import AProposPage from './Pages/AProposPage/index.jsx'
import LogementPage from './Pages/LogementPage/index.jsx';
import Error from './Pages/Error/index.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home />} />
                <Route path="/AProposPage" element={<AProposPage />} />
                <Route path="/LogementPage/:id" element={<LogementPage />} />
                <Route path="/*" element={<Error />} /> 
        </Routes>
    </BrowserRouter>
);
reportWebVitals();

