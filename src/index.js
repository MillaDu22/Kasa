
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import './pages/Home/Home.css';
import './pages/AProposPage/AProposPage.css';
import './pages/LogementPage/LogementPage.css';
import './pages/Error/Error.css';
import './components/Header/Header.css';
import './components/NavHeader/NavHeader.css';
import './components/Banner/Banner.css';
import './components/GalleryCards/GalleryCards.css';
import './components/Footer/Footer.css';

import Home from './pages/Home/index.jsx';
import AProposPage from './pages/AProposPage/index.jsx';
import LogementPage from './pages/LogementPage/index.jsx';
import Error from './pages/Error/index.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="kasa/src/pages/error" element={<Navigate replace to = "Error" />} />
            <Route exact path="kasa/src/pages/home" element={<Home />} />
            <Route path="kasa/src/pages/a-propos-page" element={< AProposPage/>} />
            <Route path="/logement-page/:id" element={<LogementPage />} />
            <Route path="kasa/*" element={<Error />} /> 
        </Routes>
    </BrowserRouter>
);
reportWebVitals();

